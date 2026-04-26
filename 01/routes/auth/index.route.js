const express = require("express");
const authRouter = express.Router();
const expressValidator = require("express-validator");
const {
  passwordValidationChain,
  emailValidationChain,
  nameValidationChain,
  errorResponseValidation,
} = require("../../utils/validation.util");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  listRoles,
  createRole,
  assignRoleToUser,
  removeRoleFromUser,
} = require("../../services/auth/index.service");
const catchAsync = require("../../utils/catchAsync.util");
const { validAuth, authorizeRoles } = require("../../utils/auth.util");

/**
 * @swagger
 * components:
 *   responses:
 *     400Err:
 *       description: Invalid request data
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *
 *     401Err:
 *       description: Unauthorized
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *
 *     403Err:
 *       description: Forbidden
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *
 *     201Res:
 *       description: Created successfully
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - phone_number
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 example: StrongPassword123
 *               phone_number:
 *                 type: string
 *                 example: "09121234567"
 *               referral_code:
 *                 type: string
 *                 example: "A12su3D2"
 *     responses:
 *       201:
 *         $ref: '#/components/responses/201Res'
 *       400:
 *         $ref: '#/components/responses/400Err'
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 example: StrongPassword123
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         $ref: '#/components/responses/400Err'
 */

/**
 * @swagger
 * /auth/forget_password:
 *   post:
 *     summary: Send password reset token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: john@example.com
 *     responses:
 *       200:
 *         description: Reset token sent (if user exists)
 *       400:
 *         $ref: '#/components/responses/400Err'
 */

/**
 * @swagger
 * /auth/reset_password:
 *   post:
 *     summary: Reset password using token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *               - password
 *             properties:
 *               token:
 *                 type: string
 *                 example: jwt-reset-token
 *               password:
 *                 type: string
 *                 example: NewStrongPassword123
 *     responses:
 *       200:
 *         description: Password reset successful
 *       400:
 *         $ref: '#/components/responses/400Err'
 */

/**
 * @swagger
 * /auth/roles:
 *   get:
 *     summary: Get all roles (owner only)
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of roles
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *
 *   post:
 *     summary: Create new role (owner only)
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: teacher
 *     responses:
 *       201:
 *         description: Role created
 *       403:
 *         $ref: '#/components/responses/403Err'
 */

/**
 * @swagger
 * /auth/roles/user/{userId}/{roleId}:
 *   patch:
 *     summary: Assign role to user (owner only)
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Role assigned
 *       403:
 *         $ref: '#/components/responses/403Err'
 *
 *   delete:
 *     summary: Remove role from user (owner only)
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Role removed
 *       403:
 *         $ref: '#/components/responses/403Err'
 */

authRouter.post(
  "/register",
  emailValidationChain(),
  nameValidationChain(),
  passwordValidationChain(),
  expressValidator.body("phone_number").isMobilePhone("fa-IR").escape(),
  expressValidator.body("referral_code").isString().optional(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const { name, email, password, phone_number, referral_code } = req.body;
    const data = await register({
      name,
      email,
      password,
      phone_number,
      referral_code,
    });
    res.status(201).send(data);
  }),
);

authRouter.post(
  "/login",
  emailValidationChain(),
  passwordValidationChain(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await login(req.body);
    res.status(200).send(data);
  }),
);

authRouter.post(
  "/forget_password",
  emailValidationChain(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await forgotPassword(req.body.email);
    res.status(200).send({status: 200, data});
  }),
);

authRouter.post(
  "/reset_password",
  passwordValidationChain(),
  expressValidator.body("token").notEmpty().isJWT(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await resetPassword(req.body.token, req.body.password);
    res.status(200).send({status: 200, data});
  }),
);

authRouter.get(
  "/roles",
  validAuth,
  authorizeRoles(["owner"]),
  catchAsync(async (req, res) => {
    const data = await listRoles();
    res.status(200).send(data);
  }),
);

authRouter.post(
  "/roles",
  validAuth,
  authorizeRoles(["owner"]),
  expressValidator.body("name").notEmpty().isString().trim(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await createRole(req.body.name);
    res.status(201).send(data);
  }),
);

authRouter.patch(
  "/roles/user/:userId/:roleId",
  validAuth,
  authorizeRoles(["owner"]),
  expressValidator.param("userId").isUUID(),
  expressValidator.param("roleId").isUUID(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await assignRoleToUser(
      req.user.id,
      req.params.userId,
      req.params.roleId,
    );
    res.status(200).send(data);
  }),
);

authRouter.delete(
  "/roles/user/:userId/:roleId",
  validAuth,
  authorizeRoles(["owner"]),
  expressValidator.param("userId").isUUID(),
  expressValidator.param("roleId").isUUID(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await removeRoleFromUser(
      req.user.id,
      req.params.userId,
      req.params.roleId,
    );
    res.status(200).send(data);
  }),
);

module.exports = authRouter;
