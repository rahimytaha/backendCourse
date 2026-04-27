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
const {
  generateForgotPasswordEmail,
  sendEmail,
} = require("../../utils/sendEmail");

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
  // this function is for creating starting role (i explained it in top)
  await ensureBaseRoles();
  // first check the use exists already or not
  const checkUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (checkUser) throw new Error("this email exist");

  // this part is for checking referral code
  let checkReferral = null;

  if (data.referral_code) {
    checkReferral = await prisma.user.findUnique({
      where: { referral_code: data.referral_code },
    });

    if (!checkReferral) {
      throw new Error("referral code is invalid");
    }
  }

  // consts (userCount for counting)
  // (defaultRoleName: if the it is the first user it's going to be get the owner role (unique role))
  // (defaultRole: role name by id (use function getRoleByName))
  // (hashedPassword: hashing password for security)
  // (referralCode: generating referral code)
  const usersCount = await prisma.user.count();
  const defaultRoleName = usersCount === 0 ? "owner" : "student";
  const defaultRole = await getRoleByName(defaultRoleName);
  const hashedPassword = hashPassword(data.password);
  const referralCode = generateReferralCode();

  // and finally create the user (register)
  const newUser = await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
      referral_code: referralCode,
      referral_user_id: checkReferral ? checkReferral.id : null,
    },
  });

  // then attach the role to this user (the default roles we determined top)
  await attachRoleToUser(newUser.id, defaultRole.id);
  const userWithRoles = await getUserWithRolesById(newUser.id);
  // fetching the access_token
  return buildAuthPayload(userWithRoles);
};

const login = async (data) => {
  // check user exists or not
  const checkUser = await getUserWithRolesByEmail(data.email);

  if (!checkUser) throw new Error("this email not exist");

  // comparing password (valid password)
  const isPasswordValid = comparePassword(checkUser.password, data.password);
  if (!isPasswordValid) throw new Error("invalid password");

  // get the access_token
  return buildAuthPayload(checkUser);
};

const forgotPassword = async (email, url) => {
  // check user that exists or not
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { success: true };

  // create reste_token
  const resetToken = generateToken(
    { sub: user.id, email: user.email, type: "reset" },
    RESET_TOKEN_TTL,
  );

  // reset url (for sending to email)
  const resetUrl = `${url}?token=${resetToken}`;

  // if the project could be in the development it would run first section else second section
  if (NODE_ENV === "development") {
    // return reset_token as mock
    return {
      success: true,
      reset_token: resetToken,
    };
  } else {
    // send reset_url to users email
    await sendEmail({
      to: user.email,
      subject: "Password Reset Request",
      htmlContent: generateForgotPasswordEmail(user.name, resetUrl),
    });

    // return the message that url sent for you body...
    return {
      success: true,
      message: "Reset token sent to email successfully",
    };
  }
};

const resetPassword = async (token, newPassword) => {
  // decoding token (verifying token)
  const decoded = verifyToken(token);
  if (decoded.type !== "reset") throw new Error("invalid token type");
  // check user
  const user = await prisma.user.findUnique({ where: { id: decoded.sub } });
  if (!user) throw new Error("user not found");

  // hash password
  const hashedPassword = hashPassword(newPassword);
  // update password
  await prisma.user.update({
    where: { id: user.id },
    data: { password: hashedPassword },
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
};
