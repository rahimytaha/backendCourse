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
const {
  generateForgotPasswordEmail,
  sendEmail,
} = require("../../utils/sendEmail");
const { createNotification } = require("../notification/notification.service");

const ACCESS_TOKEN_TTL = process.env.ACCESS_TOKEN_TTL || "24h";
const RESET_TOKEN_TTL = process.env.RESET_TOKEN_TTL || "15m";
const NODE_ENV = process.env.NODE_ENV;

// remove sensetive fields like (password) for user response
// for example we don't want to show user password in getting response :)
const sanitizeUser = (user) => {
  const { password, ...safeUser } = user;
  return safeUser;
};

// creating starting roles
const ensureBaseRoles = async () => {
  // role name
  const roleNames = ["owner", "teacher", "student", "admin", "author"];
  await Promise.all(
    roleNames.map(async (name) => {
      // check existing roles
      const existing = await prisma.role.findFirst({
        where: { name: { equals: name, mode: "insensitive" } },
      });
      // if there wasn't that role, create it
      if (!existing) {
        await prisma.role.create({ data: { name } });
      }
    }),
  );
};

// get role by name
const getRoleByName = async (name) => {
  // find role (with name)
  const role = await prisma.role.findFirst({
    where: { name: { equals: name, mode: "insensitive" } },
  });
  // check role is exist or not
  if (!role) throw new Error("role not found");
  return role;
};

// attaches a role to a user and ensures it is active.
const attachRoleToUser = async (userId, roleId) => {
  const existing = await prisma.user_role.findFirst({
    where: { user_id: userId, role_id: roleId },
  });
  // if the user-role relationship already exists:
  // if it is inactive,it will be (isActive=true)
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

// get user with roles by email
const getUserWithRolesByEmail = async (email) => {
  return prisma.user.findUnique({
    where: { email },
    include: { userRoles: { include: { role: true } } },
  });
};

// get user with roles by id
const getUserWithRolesById = async (id) => {
  return prisma.user.findUnique({
    where: { id },
    include: { userRoles: { include: { role: true } } },
  });
};

// build the auth payload for generating the access_token (it is for authentication middleware almost)
const buildAuthPayload = (user) => {
  const roleNames = toRoleNames(user.userRoles);
  const permissions = toPermissions(roleNames);
  const accessToken = generateToken(
    { sub: user.id, email: user.email, type: "access" },
    ACCESS_TOKEN_TTL,
  );
  return {
    token: accessToken,
    user: {
      ...sanitizeUser(user),
      roleNames,
      permissions,
    },
  };
};

const register = async (data) => {
  await ensureBaseRoles();

  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });
  if (existingUser) throw new Error("email already exists");

  let referralUser = null;

  if (data.referral_code) {
    referralUser = await prisma.user.findUnique({
      where: { referral_code: data.referral_code },
    });
    if (!referralUser) throw new Error("invalid referral code");
  }

  const usersCount = await prisma.user.count();
  const defaultRoleName = usersCount === 0 ? "owner" : "student";
  const defaultRole = await getRoleByName(defaultRoleName);

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

  // notification
  await createNotification({
    userId: newUser.id,
    title: "Welcome",
    message: "Your account has been created",
    sendEmailFlag: true,
    emailData: {
      to: newUser.email,
      subject: "Welcome!",
      htmlContent: `<h2>Welcome ${newUser.name}</h2>`,
    },
  });

  return buildAuthPayload(userWithRoles);
};

const login = async (data) => {
  const user = await getUserWithRolesByEmail(data.email);
  if (!user) throw new Error("invalid credentials");

  const isValid = await comparePassword(user.password, data.password);
  if (!isValid) throw new Error("invalid credentials");

  // login notification
  await createNotification({
    userId: user.id,
    title: "New Login",
    message: "A new login to your account detected",
  });

  return buildAuthPayload(user);
};

const forgotPassword = async (email, url) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return { success: true };

  const resetToken = generateToken(
    { sub: user.id, type: "reset" },
    RESET_TOKEN_TTL,
  );

  const resetUrl = `${url}?token=${resetToken}`;

  // notification + email
  await createNotification({
    userId: user.id,
    title: "Password Reset",
    message: "Reset password requested",
    sendEmailFlag: true,
    emailData: {
      to: user.email,
      subject: "Reset Password",
      htmlContent: generateForgotPasswordEmail(user.name, resetUrl),
    },
  });

  // dev
  if (NODE_ENV === "development") {
    return { success: true, resetToken };
  }

  return { success: true };
};

const resetPassword = async (token, newPassword) => {
  const decoded = verifyToken(token);

  if (decoded.type !== "reset") {
    throw new Error("invalid token");
  }

  const user = await prisma.user.findUnique({
    where: { id: decoded.sub },
  });

  if (!user) throw new Error("user not found");

  const hashedPassword = await hashPassword(newPassword);

  await prisma.user.update({
    where: { id: user.id },
    data: { password: hashedPassword },
  });

  // notification
  await createNotification({
    userId: user.id,
    title: "Password Changed",
    message: "Your password has been updated",
  });

  return { success: true };
};

const listRoles = async () => {
  // this function is for creating the starting roles
  await ensureBaseRoles();
  // get all of the roles wich exists
  return prisma.role.findMany({ orderBy: { name: "asc" } });
};

const createRole = async (name) => {
  // change strange names like (Super_Admin) to (superadmin0): (lowercase and trim)
  const normalizedName = name.trim().toLowerCase();
  if (!normalizedName) throw new Error("invalid role name");
  // check the role exists already or not
  const existing = await prisma.role.findFirst({
    where: { name: { equals: normalizedName, mode: "insensitive" } },
  });
  if (existing) throw new Error("role already exists");
  // create role
  return prisma.role.create({ data: { name: normalizedName } });
};

const assignRoleToUser = async (ownerUserId, userId, roleId) => {
  // this function is for creating the starting roles
  await ensureBaseRoles();
  // check user
  const user = await getUserWithRolesById(userId);
  if (!user) throw new Error("user not found");
  // check role
  const role = await prisma.role.findUnique({ where: { id: roleId } });
  if (!role) throw new Error("role not found");
  // attach role to user
  await attachRoleToUser(userId, roleId);
  // get user with its having roles
  return getUserWithRolesById(userId);
};

const removeRoleFromUser = async (ownerUserId, userId, roleId) => {
  // check role
  const userRole = await prisma.user_role.findFirst({
    where: { user_id: userId, role_id: roleId },
  });
  if (!userRole) throw new Error("role not assigned");
  // delete role
  await prisma.user_role.delete({ where: { id: userRole.id } });
  // get user with its having roles
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
};
