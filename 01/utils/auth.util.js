const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("./client.util");

const ROLE_PERMISSIONS = {
  owner: ["*"],
  teacher: [
    "course:read:any",
    "course:read:own",
    "course:create",
    "course:update:own",
  ],
  student: ["course:read:any", "course:read:own"],
};

const hashPassword = (plainPassword) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(plainPassword, salt);
};

const comparePassword = (hash, plainPassword) => {
  return bcrypt.compareSync(plainPassword, hash);
};

const generateToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    throw new Error("invalid token");
  }
};

const generateReferralCode = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let referralCode = "";
  for (let i = 0; i < 8; i += 1) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    referralCode += characters[randomIndex];
  }
  return referralCode;
};

const toRoleNames = (userRoles = []) => {
  return userRoles
    .filter((userRole) => userRole.isActive)
    .map((userRole) => userRole.role?.name?.toLowerCase())
    .filter(Boolean);
};

const toPermissions = (roleNames = []) => {
  const permissionSet = new Set();
  roleNames.forEach((roleName) => {
    const permissions = ROLE_PERMISSIONS[roleName] || [];
    permissions.forEach((permission) => permissionSet.add(permission));
  });
  return [...permissionSet];
};

const readBearerToken = (authorizationHeader = "") => {
  const [prefix, token] = authorizationHeader.split(" ");
  if (prefix !== "Bearer" || !token) return null;
  return token;
};

const validAuth = async (req, res, next) => {
  try {
    const token = readBearerToken(req.headers.authorization);
    if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });
    const decoded = verifyToken(token);
    if (decoded.type !== "access") {
      return res.status(401).json({ success: false, message: "Invalid token type" });
    }
    const user = await prisma.user.findUnique({
      where: { id: decoded.sub },
      include: { userRoles: { include: { role: true } } },
    });
    if (!user) return res.status(401).json({ success: false, message: "Unauthorized" });
    const roleNames = toRoleNames(user.userRoles);
    const permissions = toPermissions(roleNames);
    req.user = {
      id: user.id,
      email: user.email,
      roleNames,
      permissions,
    };
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

const authorizeRoles = (allowedRoles = []) => {
  return (req, res, next) => {
    const granted = (req.user?.roleNames || []).some((roleName) =>
      allowedRoles.map((item) => item.toLowerCase()).includes(roleName),
    );
    if (!granted) return res.status(403).json({ success: false, message: "Forbidden" });
    next();
  };
};

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
  ROLE_PERMISSIONS,
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
