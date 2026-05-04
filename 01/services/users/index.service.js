const { generateReferralCode } = require("../../utils/auth.util");
const prisma = require("../../utils/client.util");
const { sanitizeUser } = require("../auth/index.service");
const { createNotification } = require("../notification/notification.service");

const getAllUsers = async ({
  query = "",
  page = 1,
  limit = 10,
  orderBy = "name",
  orderType = "desc",
} = {}) => {
  const skip = (page - 1) * limit;

  const where = query
    ? {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
          { phone_number: { contains: query, mode: "insensitive" } },
        ],
      }
    : {};

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip,
      take: Number(limit),
      orderBy: { [orderBy]: orderType },
      include: {
        userRoles: {
          include: { role: true },
        },
      },
    }),
    prisma.user.count({ where }),
  ]);

  return {
    data: users.map((user) => {
      return sanitizeUser(user);
    }),
    meta: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const getUserById = async (userId, shouldExist = true) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      userRoles: {
        include: { role: true },
      },
    },
  });

  if (shouldExist && !user) {
    throw new Error("User not found");
  }

  if (!shouldExist && user) {
    throw new Error("User already exists");
  }

  return sanitizeUser(user);
};

const createUser = async (data) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email: data.email }, { phone_number: data.phone_number }],
    },
  });

  if (existingUser) {
    throw new Error("Email or phone already exists");
  }

  const referral_code = generateReferralCode();

  const newUser = await prisma.user.create({
    data: { ...data, referral_code },
  });

  // Notification
  await createNotification({
    userId: newUser.id,
    title: "Welcome",
    message: "Your account has been created successfully",
  });

  return newUser;
};

const updateUser = async (userId, data) => {
  const user = await getUserById(userId);

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data,
  });

  // Notification
  await createNotification({
    userId,
    title: "Profile Updated",
    message: "Your profile information has been updated",
  });

  return updatedUser;
};

const deleteUser = async (userId, adminId = null) => {
  await getUserById(userId);

  await prisma.user.delete({
    where: { id: userId },
  });

  // Notification for admin (optional)
  if (adminId) {
    await createNotification({
      userId: adminId,
      title: "User Deleted",
      message: `User ${userId} has been deleted`,
    });
  }

  return true;
};

const loginAs = async (userId) => {
  const user = await getUserById(userId);

  // Notification
  await createNotification({
    userId,
    title: "New Login",
    message: "You logged into your account",
  });

  // generate JWT
  return {
    token: "mock-token",
    user,
  };
};

const addRoleToUser = async (userId, roleId) => {
  await getUserById(userId);

  const existing = await prisma.user_role.findFirst({
    where: { user_id: userId, role_id: roleId },
  });

  if (existing) {
    throw new Error("User already has this role");
  }

  const userRole = await prisma.user_role.create({
    data: {
      user_id: userId,
      role_id: roleId,
    },
  });

  await createNotification({
    userId,
    title: "Role Assigned",
    message: "A new role has been assigned to your account",
  });

  return userRole;
};

const removeRoleFromUser = async (userId, roleId) => {
  await getUserById(userId);

  const existing = await prisma.user_role.findFirst({
    where: { user_id: userId, role_id: roleId },
  });

  if (!existing) {
    throw new Error("User does not have this role");
  }

  await prisma.user_role.delete({
    where: { id: existing.id },
  });

  await createNotification({
    userId,
    title: "Role Removed",
    message: "A role has been removed from your account",
  });

  return true;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginAs,
  addRoleToUser,
  removeRoleFromUser,
};
