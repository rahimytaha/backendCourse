const {
  hashPassword,
  comparePassword,
  verifyToken,
  generateReferralCode,
  toRoleNames,
  toPermissions,
  generateToken,
} = require("../../utils/auth.util");
const prisma = require("../../utils/client.util");
const { generateForgotPasswordEmail, sendEmail } = require("../../utils/sendEmail");
const { createNotification } = require("../notification/notification.service");
const { sendLoginOTP } = require("./twofactor.service");

const ACCESS_TOKEN_TTL = process.env.ACCESS_TOKEN_TTL || "24h";
const RESET_TOKEN_TTL = process.env.RESET_TOKEN_TTL || "15m";
const NODE_ENV = process.env.NODE_ENV;

const sanitizeUser = (user) => {
  const { password, ...safeUser } = user;
  return safeUser;
};

const ensureBaseRoles = async () => {
  const roleNames = ["owner", "teacher", "student", "admin", "author"];
  await Promise.all(
    roleNames.map(async (name) => {
      const existing = await prisma.role.findFirst({
        where: { name: { equals: name, mode: "insensitive" } },
      });
      if (!existing) await prisma.role.create({ data: { name } });
    }),
  );
};

const getRoleByName = async (name) => {
  const role = await prisma.role.findFirst({
    where: { name: { equals: name, mode: "insensitive" } },
  });
  if (!role) throw new Error("Role not found.");
  return role;
};

const attachRoleToUser = async (userId, roleId) => {
  const existing = await prisma.user_role.findFirst({
    where: { user_id: userId, role_id: roleId },
  });
  if (existing) {
    if (!existing.isActive) {
      await prisma.user_role.update({
        where: { id: existing.id },
        data: { isActive: true },
      });
    }
    return existing;
  }
  return prisma.user_role.create({
    data: { user_id: userId, role_id: roleId, isActive: true },
  });
};

const getUserWithRolesByEmail = async (email) =>
  prisma.user.findUnique({
    where: { email },
    include: { userRoles: { include: { role: true } } },
  });

const getUserWithRolesById = async (id) =>
  prisma.user.findUnique({
    where: { id },
    include: { userRoles: { include: { role: true } } },
  });

const buildAuthPayload = (user) => {
  const roleNames = toRoleNames(user.userRoles);
  const permissions = toPermissions(roleNames);
  const accessToken = generateToken(
    { sub: user.id, email: user.email, type: "access" },
    ACCESS_TOKEN_TTL,
  );
  return {
    token: accessToken,
    user: { ...sanitizeUser(user), roleNames, permissions },
  };
};

const register = async (data) => {
  await ensureBaseRoles();

  const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
  if (existingUser) throw new Error("Email already exists.");

  let referralUser = null;
  if (data.referral_code) {
    referralUser = await prisma.user.findUnique({
      where: { referral_code: data.referral_code },
    });
    if (!referralUser) throw new Error("Invalid referral code.");
  }

  const usersCount = await prisma.user.count();
  const defaultRole = await getRoleByName(usersCount === 0 ? "owner" : "student");

  const hashedPassword = await hashPassword(data.password);
  const referralCode = generateReferralCode();

  const newUser = await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
      referral_code: referralCode,
      referral_user_id: referralUser?.id || null,
    },
  });

  await attachRoleToUser(newUser.id, defaultRole.id);
  const userWithRoles = await getUserWithRolesById(newUser.id);

  await createNotification({
    userId: newUser.id,
    title: "Welcome",
    message: "Your account has been created.",
    sendEmailFlag: true,
    emailData: {
      to: newUser.email,
      subject: "Welcome!",
      htmlContent: `<h2>Welcome ${newUser.name}</h2>`,
    },
  });

  return buildAuthPayload(userWithRoles);
};

const login = async ({ email, password }) => {
  const user = await getUserWithRolesByEmail(email);
  if (!user) throw new Error("Invalid credentials.");

  const isValid = await comparePassword(user.password, password);
  if (!isValid) throw new Error("Invalid credentials.");

  // If 2FA is enabled, email the user a code instead of issuing a token now
  const twoFactorRecord = await prisma.two_factor_auth.findUnique({
    where: { user_id: user.id },
  });

  if (twoFactorRecord?.is_enabled) {
    return sendLoginOTP(user.id, user.email);
    // Returns: { requiresTwoFactor: true, userId, message }
  }

  await createNotification({
    userId: user.id,
    title: "New Login",
    message: "A new login to your account was detected.",
  });

  return buildAuthPayload(user);
};

const forgotPassword = async (email, url) => {
  const user = await prisma.user.findUnique({ where: { email } });
  // Always return success to avoid revealing whether the email exists
  if (!user) return { success: true };

  const resetToken = generateToken({ sub: user.id, type: "reset" }, RESET_TOKEN_TTL);
  const resetUrl = `${url}?token=${resetToken}`;

  await createNotification({
    userId: user.id,
    title: "Password Reset",
    message: "A password reset was requested.",
    sendEmailFlag: true,
    emailData: {
      to: user.email,
      subject: "Reset Your Password",
      htmlContent: generateForgotPasswordEmail(user.name, resetUrl),
    },
  });

  if (NODE_ENV === "development") return { success: true, resetToken };
  return { success: true };
};

const resetPassword = async (token, newPassword) => {
  const decoded = verifyToken(token);
  if (decoded.type !== "reset") throw new Error("Invalid token.");

  const user = await prisma.user.findUnique({ where: { id: decoded.sub } });
  if (!user) throw new Error("User not found.");

  const hashedPassword = await hashPassword(newPassword);
  await prisma.user.update({
    where: { id: user.id },
    data: { password: hashedPassword },
  });

  await createNotification({
    userId: user.id,
    title: "Password Changed",
    message: "Your password has been updated.",
  });

  return { success: true };
};

const listRoles = async () => {
  await ensureBaseRoles();
  return prisma.role.findMany({ orderBy: { name: "asc" } });
};

const createRole = async (name) => {
  const normalizedName = name.trim().toLowerCase();
  if (!normalizedName) throw new Error("Invalid role name.");
  const existing = await prisma.role.findFirst({
    where: { name: { equals: normalizedName, mode: "insensitive" } },
  });
  if (existing) throw new Error("Role already exists.");
  return prisma.role.create({ data: { name: normalizedName } });
};

const assignRoleToUser = async (_ownerUserId, userId, roleId) => {
  await ensureBaseRoles();
  const user = await getUserWithRolesById(userId);
  if (!user) throw new Error("User not found.");
  const role = await prisma.role.findUnique({ where: { id: roleId } });
  if (!role) throw new Error("Role not found.");
  await attachRoleToUser(userId, roleId);
  return getUserWithRolesById(userId);
};

const removeRoleFromUser = async (_ownerUserId, userId, roleId) => {
  const userRole = await prisma.user_role.findFirst({
    where: { user_id: userId, role_id: roleId },
  });
  if (!userRole) throw new Error("Role not assigned to this user.");
  await prisma.user_role.delete({ where: { id: userRole.id } });
  return getUserWithRolesById(userId);
};

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
  listRoles,
  createRole,
  assignRoleToUser,
  removeRoleFromUser,
  sanitizeUser,
  buildAuthPayload,
  getUserWithRolesById,
};