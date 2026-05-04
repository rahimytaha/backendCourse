/**
 * routes/auth/index.route.js
 */

const express = require("express");
const authRouter = express.Router();
const { body, param } = require("express-validator");
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
  buildAuthPayload,
  getUserWithRolesById,
} = require("../../services/auth/index.service");

const {
  requestEnable2FA,
  confirmEnable2FA,
  requestDisable2FA,
  confirmDisable2FA,
  verifyLoginOTP,
  linkAccount,
  unlinkAccount,
  listLinkedAccounts,
} = require("../../services/auth/twofactor.service");

const catchAsync = require("../../utils/catchAsync.util");
const { validAuth, authorizeRoles } = require("../../utils/auth.util");
const logger = require("../../utils/logger");

// ─── Validation helpers ───────────────────────────────────────────────────────

const otpChain = () =>
  body("otp")
    .notEmpty()
    .isString()
    .isLength({ min: 6, max: 6 })
    .withMessage("OTP must be exactly 6 digits.");

// ─── Shared Swagger components ────────────────────────────────────────────────

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 *   schemas:
 *
 *     AuthPayload:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         user:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               example: "a1b2c3d4-e5f6-..."
 *             name:
 *               type: string
 *               example: "John Doe"
 *             email:
 *               type: string
 *               example: "john@example.com"
 *             roleNames:
 *               type: array
 *               items:
 *                 type: string
 *               example: ["student"]
 *             permissions:
 *               type: array
 *               items:
 *                 type: string
 *               example: ["read:courses"]
 *
 *     TwoFactorPending:
 *       type: object
 *       properties:
 *         requiresTwoFactor:
 *           type: boolean
 *           example: true
 *         userId:
 *           type: string
 *           example: "a1b2c3d4-e5f6-..."
 *         message:
 *           type: string
 *           example: "A verification code has been sent to your email."
 *
 *     MessageResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Operation successful."
 *
 *     Role:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "uuid"
 *         name:
 *           type: string
 *           example: "teacher"
 *
 *     UserWithRoles:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         userRoles:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               role:
 *                 $ref: '#/components/schemas/Role'
 *
 *     LinkedAccount:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         provider:
 *           type: string
 *           example: "google"
 *         email:
 *           type: string
 *           example: "user@gmail.com"
 *         created_at:
 *           type: string
 *           format: date-time
 *
 *     ValidationError:
 *       type: object
 *       properties:
 *         errors:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               field:
 *                 type: string
 *               message:
 *                 type: string
 *
 *   responses:
 *     400:
 *       description: Validation error — one or more fields are invalid
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ValidationError'
 *     401:
 *       description: Unauthorized — missing or invalid JWT
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MessageResponse'
 *     403:
 *       description: Forbidden — you don't have the required role
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MessageResponse'
 *     404:
 *       description: Resource not found
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MessageResponse'
 */

// ─── Auth ─────────────────────────────────────────────────────────────────────

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new account. The very first registered user becomes the owner.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password, phone_number]
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john@example.com"
 *               password:
 *                 type: string
 *                 example: "StrongPass123"
 *               phone_number:
 *                 type: string
 *                 example: "09121234567"
 *               referral_code:
 *                 type: string
 *                 description: Optional referral code from an existing user
 *                 example: "A1B2C3D4"
 *     responses:
 *       201:
 *         description: User registered — returns JWT and user info
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthPayload'
 *       400:
 *         $ref: '#/components/responses/400'
 */
authRouter.post(
  "/register",
  emailValidationChain(),
  nameValidationChain(),
  passwordValidationChain(),
  body("phone_number").isMobilePhone("fa-IR").escape(),
  body("referral_code").isString().optional(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`Registering: ${req.body.email}`);
    const data = await register(req.body);
    res.status(201).send(data);
  }),
);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 *     description: |
 *       Returns a JWT on success.
 *       If the account has 2FA enabled, returns `{ requiresTwoFactor: true, userId }`
 *       instead. The client must then call `POST /auth/2fa/verify-login` with that
 *       `userId` and the 6-digit code that was emailed to the user.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john@example.com"
 *               password:
 *                 type: string
 *                 example: "StrongPass123"
 *     responses:
 *       200:
 *         description: Login successful (or 2FA required)
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - $ref: '#/components/schemas/AuthPayload'
 *                 - $ref: '#/components/schemas/TwoFactorPending'
 *       400:
 *         $ref: '#/components/responses/400'
 */
authRouter.post(
  "/login",
  emailValidationChain(),
  passwordValidationChain(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`Login attempt: ${req.body.email}`);
    const data = await login(req.body);
    res.status(200).send(data);
  }),
);

/**
 * @swagger
 * /auth/forget_password:
 *   post:
 *     summary: Request a password-reset link
 *     description: |
 *       Emails a password-reset link to the given address.
 *       Always returns success to avoid revealing whether the email is registered.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, url]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john@example.com"
 *               url:
 *                 type: string
 *                 description: Base URL of the reset page on your frontend — the token will be appended as ?token=...
 *                 example: "https://myapp.com/reset-password"
 *     responses:
 *       200:
 *         description: Reset email sent (if the address exists)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       400:
 *         $ref: '#/components/responses/400'
 */
authRouter.post(
  "/forget_password",
  emailValidationChain(),
  body("url").isURL().notEmpty(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    await forgotPassword(req.body.email, req.body.url);
    res
      .status(200)
      .send({ message: "If that email exists, a reset link has been sent." });
  }),
);

/**
 * @swagger
 * /auth/reset_password:
 *   post:
 *     summary: Reset password using the token from the email link
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [token, password]
 *             properties:
 *               token:
 *                 type: string
 *                 description: The JWT reset token received in the email link
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *               password:
 *                 type: string
 *                 description: New password
 *                 example: "NewStrongPass456"
 *     responses:
 *       200:
 *         description: Password changed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       400:
 *         $ref: '#/components/responses/400'
 */
authRouter.post(
  "/reset_password",
  passwordValidationChain(),
  body("token").notEmpty().isJWT(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    await resetPassword(req.body.token, req.body.password);
    res.status(200).send({ message: "Password changed successfully." });
  }),
);

// ─── 2FA ─────────────────────────────────────────────────────────────────────

/**
 * @swagger
 * /auth/2fa/enable:
 *   post:
 *     summary: "Step 1: Request to enable 2FA"
 *     description: Sends a 6-digit code to the user's registered email. Follow up with POST /auth/2fa/enable/confirm.
 *     tags: [2FA]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Verification code sent
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       400:
 *         $ref: '#/components/responses/400'
 *       401:
 *         $ref: '#/components/responses/401'
 */
authRouter.post(
  "/2fa/enable",
  validAuth,
  catchAsync(async (req, res) => {
    logger.info(`2FA enable requested: ${req.user.id}`);
    const data = await requestEnable2FA(req.user.id);
    res.status(200).send(data);
  }),
);

/**
 * @swagger
 * /auth/2fa/enable/confirm:
 *   post:
 *     summary: "Step 2: Confirm 2FA activation with the emailed code"
 *     description: Verifies the 6-digit code from step 1 and enables 2FA on the account.
 *     tags: [2FA]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [otp]
 *             properties:
 *               otp:
 *                 type: string
 *                 minLength: 6
 *                 maxLength: 6
 *                 example: "048271"
 *     responses:
 *       200:
 *         description: 2FA enabled successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       400:
 *         $ref: '#/components/responses/400'
 *       401:
 *         $ref: '#/components/responses/401'
 */
authRouter.post(
  "/2fa/enable/confirm",
  validAuth,
  otpChain(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`2FA enable confirm: ${req.user.id}`);
    const data = await confirmEnable2FA(req.user.id, req.body.otp);
    res.status(200).send(data);
  }),
);

/**
 * @swagger
 * /auth/2fa/disable:
 *   post:
 *     summary: "Step 1: Request to disable 2FA"
 *     description: Sends a 6-digit code to the user's email. Follow up with POST /auth/2fa/disable/confirm.
 *     tags: [2FA]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Verification code sent
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       400:
 *         $ref: '#/components/responses/400'
 *       401:
 *         $ref: '#/components/responses/401'
 */
authRouter.post(
  "/2fa/disable",
  validAuth,
  catchAsync(async (req, res) => {
    logger.info(`2FA disable requested: ${req.user.id}`);
    const data = await requestDisable2FA(req.user.id);
    res.status(200).send(data);
  }),
);

/**
 * @swagger
 * /auth/2fa/disable/confirm:
 *   post:
 *     summary: "Step 2: Confirm 2FA deactivation with the emailed code"
 *     description: Verifies the 6-digit code from step 1 and disables 2FA on the account.
 *     tags: [2FA]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [otp]
 *             properties:
 *               otp:
 *                 type: string
 *                 minLength: 6
 *                 maxLength: 6
 *                 example: "048271"
 *     responses:
 *       200:
 *         description: 2FA disabled successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       400:
 *         $ref: '#/components/responses/400'
 *       401:
 *         $ref: '#/components/responses/401'
 */
authRouter.post(
  "/2fa/disable/confirm",
  validAuth,
  otpChain(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`2FA disable confirm: ${req.user.id}`);
    const data = await confirmDisable2FA(req.user.id, req.body.otp);
    res.status(200).send(data);
  }),
);

/**
 * @swagger
 * /auth/2fa/verify-login:
 *   post:
 *     summary: Complete a 2FA-gated login
 *     description: |
 *       Called after `POST /auth/login` returns `requiresTwoFactor: true`.
 *       Submit the `userId` from that response together with the 6-digit code
 *       emailed to the user. Returns a full JWT on success.
 *     tags: [2FA]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userId, otp]
 *             properties:
 *               userId:
 *                 type: string
 *                 format: uuid
 *                 description: The userId returned by POST /auth/login
 *                 example: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 *               otp:
 *                 type: string
 *                 minLength: 6
 *                 maxLength: 6
 *                 example: "048271"
 *     responses:
 *       200:
 *         description: Login complete — returns full auth payload
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthPayload'
 *       400:
 *         $ref: '#/components/responses/400'
 *       401:
 *         description: Invalid or expired OTP — ask the user to log in again
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 */
authRouter.post(
  "/2fa/verify-login",
  body("userId").notEmpty().isUUID(),
  otpChain(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`2FA verify-login for user: ${req.body.userId}`);
    const data = await verifyLoginOTP(
      req.body.userId,
      req.body.otp,
      buildAuthPayload,
      getUserWithRolesById,
    );
    res.status(200).send(data);
  }),
);

// ─── Roles ────────────────────────────────────────────────────────────────────

/**
 * @swagger
 * /auth/roles:
 *   get:
 *     summary: List all roles
 *     description: Returns every role in the system. Owner only.
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Array of roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 *       401:
 *         $ref: '#/components/responses/401'
 *       403:
 *         $ref: '#/components/responses/403'
 *
 *   post:
 *     summary: Create a new role
 *     description: Adds a custom role to the system. Owner only.
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *                 example: "moderator"
 *     responses:
 *       201:
 *         description: Role created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       400:
 *         $ref: '#/components/responses/400'
 *       401:
 *         $ref: '#/components/responses/401'
 *       403:
 *         $ref: '#/components/responses/403'
 */
authRouter.get(
  "/roles",
  validAuth,
  authorizeRoles(["owner"]),
  catchAsync(async (_req, res) => {
    res.status(200).send(await listRoles());
  }),
);

authRouter.post(
  "/roles",
  validAuth,
  authorizeRoles(["owner"]),
  body("name").notEmpty().isString().trim(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await createRole(req.body.name);
    res.status(201).send(data);
  }),
);

/**
 * @swagger
 * /auth/roles/user/{userId}/{roleId}:
 *   patch:
 *     summary: Assign a role to a user
 *     description: Attaches an existing role to any user. Owner only.
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the user to receive the role
 *         example: "a1b2c3d4-e5f6-..."
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the role to assign
 *         example: "f7e8d9c0-..."
 *     responses:
 *       200:
 *         description: Updated user with all current roles
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserWithRoles'
 *       400:
 *         $ref: '#/components/responses/400'
 *       401:
 *         $ref: '#/components/responses/401'
 *       403:
 *         $ref: '#/components/responses/403'
 *       404:
 *         $ref: '#/components/responses/404'
 *
 *   delete:
 *     summary: Remove a role from a user
 *     description: Detaches a role from a user. Owner only.
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the user
 *         example: "a1b2c3d4-e5f6-..."
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the role to remove
 *         example: "f7e8d9c0-..."
 *     responses:
 *       200:
 *         description: Updated user with remaining roles
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserWithRoles'
 *       400:
 *         $ref: '#/components/responses/400'
 *       401:
 *         $ref: '#/components/responses/401'
 *       403:
 *         $ref: '#/components/responses/403'
 *       404:
 *         $ref: '#/components/responses/404'
 */
authRouter.patch(
  "/roles/user/:userId/:roleId",
  validAuth,
  authorizeRoles(["owner"]),
  param("userId").isUUID(),
  param("roleId").isUUID(),
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
  param("userId").isUUID(),
  param("roleId").isUUID(),
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

// ─── Linked accounts ──────────────────────────────────────────────────────────

/**
 * @swagger
 * /auth/accounts:
 *   get:
 *     summary: List linked provider accounts
 *     description: Returns all external OAuth accounts (e.g. Google, GitHub) linked to the current user.
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Array of linked accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LinkedAccount'
 *       401:
 *         $ref: '#/components/responses/401'
 */
authRouter.get(
  "/accounts",
  validAuth,
  catchAsync(async (req, res) => {
    res.status(200).send(await listLinkedAccounts(req.user.id));
  }),
);

/**
 * @swagger
 * /auth/accounts/link:
 *   post:
 *     summary: Link an external provider account
 *     description: |
 *       Attaches an OAuth provider account to the current user.
 *       The same provider account cannot be linked to more than one user.
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [provider, providerId]
 *             properties:
 *               provider:
 *                 type: string
 *                 description: Provider name
 *                 example: "google"
 *               providerId:
 *                 type: string
 *                 description: The unique user ID issued by that provider
 *                 example: "117391234567890"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Optional email address returned by the provider
 *                 example: "user@gmail.com"
 *     responses:
 *       201:
 *         description: Account linked successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LinkedAccount'
 *       400:
 *         $ref: '#/components/responses/400'
 *       401:
 *         $ref: '#/components/responses/401'
 */
authRouter.post(
  "/accounts/link",
  validAuth,
  body("provider").notEmpty().isString().trim(),
  body("providerId").notEmpty().isString().trim(),
  body("email").optional().isEmail(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`Linking ${req.body.provider} for user: ${req.user.id}`);
    const data = await linkAccount(req.user.id, req.body);
    res.status(201).send(data);
  }),
);

/**
 * @swagger
 * /auth/accounts/unlink/{provider}:
 *   delete:
 *     summary: Unlink a provider account
 *     description: |
 *       Removes a linked OAuth account from the current user.
 *       Will fail if this is the user's only login method and they have no password set.
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: provider
 *         required: true
 *         schema:
 *           type: string
 *         description: The provider name to unlink
 *         example: "google"
 *     responses:
 *       200:
 *         description: Account unlinked successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       400:
 *         $ref: '#/components/responses/400'
 *       401:
 *         $ref: '#/components/responses/401'
 *       404:
 *         $ref: '#/components/responses/404'
 */
authRouter.delete(
  "/accounts/unlink/:provider",
  validAuth,
  param("provider").notEmpty().isString(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`Unlinking ${req.params.provider} for user: ${req.user.id}`);
    const data = await unlinkAccount(req.user.id, req.params.provider);
    res.status(200).send(data);
  }),
);

module.exports = authRouter;
