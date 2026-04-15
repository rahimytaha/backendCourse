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

  // const filterOption = {
  //   OR: query
  //     ? [
  //         { name: { contains: query } },
  //         { email: { contains: query } },
  //         { phone_number: { contains: query } },
  //       ]
  //     : undefined,
  // };
  const users = await prisma.user.findMany()
  //  .user.findMany({
  //   // where: filterOption,
  //   omit: { password: true },
  //   skip: startRecord,
  //   take: endRecord,
  //   orderBy: { [orderBy]: orderType },
  // });
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
  const user = await prisma.user.findFirst({ where: { id: userId } });
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
module.exports = {
  getAllUsers,
  loginAs,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};
