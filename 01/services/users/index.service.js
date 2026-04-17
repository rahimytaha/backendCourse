const prisma = require("../../utils/client.util");
const getAllUsers = async (
  query = null,
  page = 0,
  limit = 10,
  orderBy = "name",
  orderType = "desc",
) => {
  const startRecord = page * limit;
  const endRecord = (page + 1) * limit;

  const filterOption = {
    OR: query
      ? [
          { name: { contains: query } },
          { email: { contains: query } },
          { phone_number: { contains: query } },
        ]
      : undefined,
  };
  const users = await prisma.user.findMany({
    where: filterOption,
    // omit: { password: true },
    skip: startRecord,
    take: endRecord,
    orderBy: { [orderBy]: orderType },
  });
  return users;
};
const createUser = async (data) => {
  const checkUser = await prisma.user.findUnique({
    where: { email: data.email },
  });
  if (checkUser) throw Error("this email exist ");
  const newUser = await prisma.user.create({ data });
  return newUser;
};
const updateUser = async (userId, data) => {
  await getUserById(userId);
  await prisma.user.update({ where: { id: userId }, data });
};
const deleteUser = async (userId) => {
  await getUserById(userId);
  await prisma.user.delete({ where: { id: userId } });
};
const getUserById = async (userId, shouldExist = true) => {
  const user = await prisma.user.findFirst({
    where: { id: userId },
    include: { userRoles: { include: { role: true } } },
  });
  if (shouldExist && !user) {
    throw Error("user could not found");
  }
  if (!shouldExist && user) {
    throw Error("user exist ");
  }
  return user;
};

const loginAs = async (userId) => {
  await getUserById(userId);
  return "token";
};

/// role section
const addRole = async (userId, roleId) => {
  const checlExistRole = await prisma.user_role.findFirst({
    where: { user_id: userId, role_id: roleId },
  });
  if (checlExistRole) throw Error("user have this role");
  await prisma.user_role.create({ data: { user_id: userId, role_id: roleId } });
};
const deleteRole = async (userId, roleId) => {
  const checlExistRole = await prisma.user_role.findFirst({
    where: { user_id: userId, role_id: roleId },
  });
  if (!checlExistRole) throw Error("user have not this role");
  await prisma.user_role.delete({ where: { id: checlExistRole.id } });
};
const getRoleList = async () => {
  const list = await prisma.role.findMany();
  return list;
};
const getRoleById = async (roleId) => {
  const role = await prisma.role.findFirst({ where: { id: roleId } });
  if (!role) throw Error("role could not found");
  return role;
};
module.exports = {
  getAllUsers,
  loginAs,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getRoleById,
  getRoleList,
  addRole,
  deleteRole,
};
