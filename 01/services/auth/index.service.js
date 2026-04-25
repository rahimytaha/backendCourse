const {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
  generateReferralCode,
  toRoleNames,
  toPermissions,
} = require("../../utils/auth.util");
const prisma = require("../../utils/client.util");

const ACCESS_TOKEN_TTL = process.env.ACCESS_TOKEN_TTL || "24h";
const RESET_TOKEN_TTL = process.env.RESET_TOKEN_TTL || "15m";

const sanitizeUser = (user) => {
  const { password, ...safeUser } = user;
  return safeUser;
};

// const ensureBaseRoles = async () => {
//   const roleNames = ["owner", "teacher", "student"];
//   await Promise.all(
//     roleNames.map(async (name) => {
//       const existing = await prisma.role.findFirst({
//         where: { name: { equals: name, mode: "insensitive" } },
//       });
//       if (!existing) {
//         await prisma.role.create({ data: { name } });
//       }
//     }),
//   );
// };

const getRoleByName = async (name) => {
  const role = await prisma.role.findFirst({
    where: { name: { equals: name, mode: "insensitive" } },
  });
  if (!role) throw new Error("role not found");
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

const getUserWithRolesByEmail = async (email) => {
  return prisma.user.findUnique({
    where: { email },
    include: { userRoles: { include: { role: true } } },
  });
};

const getUserWithRolesById = async (id) => {
  return prisma.user.findUnique({
    where: { id },
    include: { userRoles: { include: { role: true } } },
  });
};

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
  // await ensureBaseRoles();
  const checkUser = await prisma.user.findUnique({ where: { email: data.email } });

  if (checkUser) throw new Error("this email exist");

  const usersCount = await prisma.user.count();
  const defaultRoleName = usersCount === 0 ? "owner" : "student";
  const defaultRole = await getRoleByName(defaultRoleName);
  const hashedPassword = hashPassword(data.password);
  const referralCode = generateReferralCode();

  const newUser = await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
      referral_code: referralCode,
    },
  });

  await attachRoleToUser(newUser.id, defaultRole.id);
  const userWithRoles = await getUserWithRolesById(newUser.id);
  return buildAuthPayload(userWithRoles);
};

const login = async (data) => {
  const checkUser = await getUserWithRolesByEmail(data.email);

  if (!checkUser) throw new Error("this email not exist");

  const isPasswordValid = comparePassword(checkUser.password, data.password);
  if (!isPasswordValid) throw new Error("invalid password");

  return buildAuthPayload(checkUser);
};

const forgotPassword = async (email) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { success: true };
  const resetToken = generateToken(
    { sub: user.id, email: user.email, type: "reset" },
    RESET_TOKEN_TTL,
  );
  return {
    success: true,
    resetToken,
  };
};

const resetPassword = async (token, newPassword) => {
  const decoded = verifyToken(token);
  if (decoded.type !== "reset") throw new Error("invalid token type");
  const user = await prisma.user.findUnique({ where: { id: decoded.sub } });
  if (!user) throw new Error("user not found");
  const hashedPassword = hashPassword(newPassword);
  await prisma.user.update({
    where: { id: user.id },
    data: { password: hashedPassword },
  });
  return { success: true };
};

const listRoles = async () => {
  // await ensureBaseRoles();
  return prisma.role.findMany({ orderBy: { name: "asc" } });
};

const createRole = async (name) => {
  const normalizedName = name.trim().toLowerCase();
  if (!normalizedName) throw new Error("invalid role name");
  const existing = await prisma.role.findFirst({
    where: { name: { equals: normalizedName, mode: "insensitive" } },
  });
  if (existing) throw new Error("role already exists");
  return prisma.role.create({ data: { name: normalizedName } });
};

const assignRoleToUser = async (ownerUserId, userId, roleId) => {
  // await ensureBaseRoles();
  const owner = await getUserWithRolesById(ownerUserId);
  const ownerRoles = toRoleNames(owner.userRoles);
  if (!ownerRoles.includes("owner")) throw new Error("only owner can manage roles");
  const user = await getUserWithRolesById(userId);
  if (!user) throw new Error("user not found");
  const role = await prisma.role.findUnique({ where: { id: roleId } });
  if (!role) throw new Error("role not found");
  await attachRoleToUser(userId, roleId);
  return getUserWithRolesById(userId);
};

const removeRoleFromUser = async (ownerUserId, userId, roleId) => {
  const owner = await getUserWithRolesById(ownerUserId);
  const ownerRoles = toRoleNames(owner.userRoles);
  if (!ownerRoles.includes("owner")) throw new Error("only owner can manage roles");
  const userRole = await prisma.user_role.findFirst({
    where: { user_id: userId, role_id: roleId },
  });
  if (!userRole) throw new Error("role not assigned");
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
};
