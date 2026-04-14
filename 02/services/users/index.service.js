const prisma = require("../../utils/client.util");
const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};
const createUser = async (data) => {};
const updateUser = async (userId, data) => {};
const deleteUser = async (userId) => {};
const getUserById = async (userId) => {
  // const
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};
