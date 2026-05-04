const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("./client.util");
const { ROLE_PERMISSIONS } = require("../config/roles");

// hash password (hide password)
const hashPassword = (plainPassword) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(plainPassword, salt);
};

// compare password (valid password)
const comparePassword = (hash, plainPassword) => {
  return bcrypt.compareSync(plainPassword, hash);
};

// generate token
const generateToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn });
};

// verify token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    throw new Error("invalid token");
  }
};

// generate referral code for new user
const generateReferralCode = () => {
  // available characters
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let referralCode = "";
  // generating 8 max length code (using "for")
  for (let i = 0; i < 8; i += 1) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    referralCode += characters[randomIndex];
  }
  return referralCode;
};

// get roles (names of roles) of a user
const toRoleNames = (userRoles = []) => {
  return userRoles
    .filter((userRole) => userRole.isActive)
    .map((userRole) => userRole.role?.name?.toLowerCase())
    .filter(Boolean);
};

// get permissions (names of permissions) of a user
const toPermissions = (roleNames = []) => {
  const permissionSet = new Set();
  roleNames.forEach((roleName) => {
    const permissions = ROLE_PERMISSIONS[roleName] || [];
    permissions.forEach((permission) => permissionSet.add(permission));
  });
  return [...permissionSet];
};

// check bearer token
const readBearerToken = (authorizationHeader = "") => {
  // split bearer than Token
  const [prefix, token] = authorizationHeader.split(" ");
  // check correctly
  if (prefix !== "Bearer" || !token) return null;
  return token;
};

// middleware for authentication
const validAuth = async (req, res, next) => {
  try {
    // check token
    const token = readBearerToken(req.headers.authorization);
    if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });
    // verify or decode token
    const decoded = verifyToken(token);
    if (decoded.type !== "access") {
      return res.status(401).json({ success: false, message: "Invalid token type" });
    }
    // check user
    const user = await prisma.user.findUnique({
      where: { id: decoded.sub },
      include: { userRoles: { include: { role: true } } },
    });
    if (!user) return res.status(401).json({ success: false, message: "Unauthorized" });
    // get roles
    const roleNames = toRoleNames(user.userRoles);
    // get permissions
    const permissions = toPermissions(roleNames);
    // add id, email, roleNames, permissions to request
    req.user = {
      id: user.id,
      email: user.email,
      roleNames,
      permissions,
    };

    next();
  } catch (error) {
    // error: something is wrong -_-
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

// authorize roles (access only these roles to an endpoint)
const authorizeRoles = (allowedRoles = []) => {
  return (req, res, next) => {
    const granted = (req.user?.roleNames || []).some((roleName) =>
      allowedRoles.map((item) => item.toLowerCase()).includes(roleName),
    );
    if (!granted) return res.status(403).json({ success: false, message: "Forbidden" });
    next();
  };
};

// authorize permissions (access only these permissions to an endpoint)
const authorizePermissions = (requiredPermissions = []) => {
  return (req, res, next) => {
    const permissions = req.user?.permissions || [];
    if (permissions.includes("*")) return next();
    const granted = requiredPermissions.every((permission) =>
      permissions.includes(permission),
    );
    if (!granted) return res.status(403).json({ success: false, message: "Forbidden" });
    next();
  };
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
  generateReferralCode,
  validAuth,
  authorizeRoles,
  authorizePermissions,
  toRoleNames,
  toPermissions,
};
