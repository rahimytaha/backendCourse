const express = require("express");

const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  loginAs,
  getRoleList,
  addRole,
  deleteRole,
} = require("../../services/users/index.service");
const {
  errorResponseValidation,
  passwordValidationChain,
} = require("../../utils/validation.util");
const catchAsysnc = require("../../utils/catchAsync.util");
const userRouter = express.Router();
const expressValidator = require("express-validator");
const { authorizePermissions, authorizeRoles, validAuth } = require("../../utils/auth.util");

/**
 * @swagger
 * components:
 *   responses:
 *     401Err:
 *       description: no access 401
 *       content:
 *         application/json:
 *           schema:
 *           type: object
 *     403Err:
 *       description: no access 403
 *       content:
 *         application/json:
 *           schema:
 *           type: object
 *     400Err:
 *       description: invalid data
 *       content:
 *         application/json:
 *           schema:
 *           type: object
 *     201Res:
 *       description: created
 *       content:
 *         application/json:
 *           schema:
 *           type: object
 *
 *
 */
/**
 * @swagger
 * /users/all:
 *   get:
 *     summary: get all users list
 *     tags:
 *       - Users
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 0
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *           default: ""
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: orderBy
 *       - in: query
 *         name: orderType
 *     responses:
 *       401:
 *         $ref:  '#/components/responses/401Err'
 *       403:
 *         $ref:  '#/components/responses/403Err'
 *       200:
 *         description: users list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *
 */
userRouter.get(
  "/all",
  expressValidator.query("query").optional().escape(),
  expressValidator.query("page").optional().toInt(),
  expressValidator.query("limit").optional().toInt(),
  expressValidator.query("orderBy").optional().notEmpty(),
  expressValidator.query("orderType").optional().notEmpty(),
  validAuth,
  authorizePermissions(['user:read:any']),
  catchAsysnc(async (req, res, next) => {
    errorResponseValidation(req, res);
    const {
      query = undefined,
      page = undefined,
      limit = undefined,
      orderBy = undefined,
      orderType = undefined,
    } = req.query;
    const data = await getAllUsers(query, page, limit, orderBy, orderType);
    res.status(200).send(data);
  }),
);
/**
 * @swagger
 * /users/create:
 *  post:
 *    summary: create an user
 *    tags:
 *      - Users
 *    requestBody:
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
 *               - location
 *             properties:
 *               name:
 *                 type: string
 *                 default: "Taha rahimi"
 *               email:
 *                 type: string
 *                 default: "rahimytaha9@gmail.com"
 *               password:
 *                 type: string
 *                 default: "StrongPassword123"
 *               phone_number:
 *                 type: string
 *                 default: "0911***1234"
 *               location:
 *                 type: string
 *                 default: "Iran sari pezh"
 *
 *    responses:
 *      400:
 *        $ref: '#/components/responses/400Err'
 *      201:
 *        $ref: '#/components/responses/201Res'
 *      403:
 *        $ref:  '#/components/responses/403Err'
 *
 *
 *
 *
 */
userRouter.post(
  "/create",
  passwordValidationChain(),
  expressValidator.body("name").notEmpty().escape(),
  expressValidator.body("email").notEmpty().escape().isEmail(),
  expressValidator
    .body("phone_number")
    .notEmpty()
    .escape()
    .isMobilePhone("fa-IR"),
  expressValidator.body("location").notEmpty().escape(),
  validAuth,
  authorizePermissions(['user:create']),
  catchAsysnc(async (req, res, next) => {
    errorResponseValidation(req, res);
    const data = await createUser(req.body);
    res.status(201).send(data);
  }),
);
/**
 * @swagger
 * /users/{id}:
 *  get:
 *    summary: get user detail by id
 *    tags:
 *      - Users
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *    responses:
 *      400:
 *        $ref: '#/components/responses/400Err'
 *      403:
 *        $ref:  '#/components/responses/403Err'
 *  delete:
 *    summary: delete user by id
 *    tags:
 *      - Users
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *
 *    responses:
 *      400:
 *        $ref: '#/components/responses/400Err'
 *      403:
 *        $ref:  '#/components/responses/403Err'
 *  put:
 *    summary: update user by id
 *    tags:
 *      - Users
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *    requestBody:
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
 *               - location
 *             properties:
 *               name:
 *                 type: string
 *                 default: "Taha rahimi"
 *               email:
 *                 type: string
 *                 default: "rahimytaha9@gmail.com"
 *               password:
 *                 type: string
 *                 default: "StrongPassword123"
 *               phone_number:
 *                 type: string
 *                 default: "0911***1234"
 *               location:
 *                 type: string
 *                 default: "Iran sari pezh"
 *
 *    responses:
 *      400:
 *        $ref: '#/components/responses/400Err'
 *      403:
 *        $ref:  '#/components/responses/403Err'
 *
 */
// update profile by admin with userId
userRouter.put(
  "/:id",
  passwordValidationChain(),
  expressValidator.param("id").isUUID().notEmpty().escape(),
  expressValidator.body("name").notEmpty().escape(),
  expressValidator.body("email").notEmpty().escape().isEmail(),
  expressValidator
    .body("phone_number")
    .notEmpty()
    .escape()
    .isMobilePhone("fa-IR"),
  expressValidator.body("location").notEmpty().escape(),
  validAuth,
  authorizePermissions(['user:update']),
  catchAsysnc(async (req, res, next) => {
    const userId = req.params.id;
    errorResponseValidation(req, res);
    const data = await updateUser(userId, req.body);
    res.send(data);
  }),
);
/**
 * @swagger
 * /users/:
 *  put:
 *    summary: update user by id
 *    tags:
 *      - Users
 *    requestBody:
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
 *               - location
 *             properties:
 *               name:
 *                 type: string
 *                 default: "Taha rahimi"
 *               email:
 *                 type: string
 *                 default: "rahimytaha9@gmail.com"
 *               password:
 *                 type: string
 *                 default: "StrongPassword123"
 *               phone_number:
 *                 type: string
 *                 default: "0911***1234"
 *               location:
 *                 type: string
 *                 default: "Iran sari pezh"
 *
 *    responses:
 *      400:
 *        $ref: '#/components/responses/400Err'
 *      403:
 *        $ref:  '#/components/responses/403Err'
 *
 */
// update profile by user
userRouter.put(
  "/",

  passwordValidationChain(),
  expressValidator.body("name").notEmpty().escape(),
  expressValidator.body("email").notEmpty().escape().isEmail(),
  expressValidator
    .body("phone_number")
    .notEmpty()
    .escape()
    .isMobilePhone("fa-IR"),
  expressValidator.body("location").notEmpty().escape(),
  validAuth,
  authorizePermissions(['user:update:own']),
  catchAsysnc(async (req, res, next) => {
    const userId = 1;
    errorResponseValidation(req, res);
    const data = await updateUser(userId, req.body);
    res.send(data);
  }),
);

userRouter.delete(
  "/:id",
  validAuth,
  expressValidator.param("id").isUUID().notEmpty().escape(),
  authorizePermissions(['user:delete']),
  catchAsysnc(async (req, res) => {
    const userId = req.params.id;
    const response = await deleteUser(userId);
    res.send(response);
  }),
);
// get user detail for admin by admin with userId
userRouter.get(
  "/:id",
  validAuth,
  expressValidator.param("id").isUUID().notEmpty().escape(),
  authorizePermissions(['user:read:any']),
  catchAsysnc(async (req, res) => {
    const userId = req.params.id;
    const response = await getUserById(userId);
    res.send(response);
  }),
);
/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: get my profile
 *     responses:
 *       400:
 *         $ref: '#/components/responses/400Err'
 *       403:
 *         $ref:  '#/components/responses/403Err'
 *     
 */
// get user detail by user with itself token
userRouter.get(
  "/",
  validAuth,
  authorizePermissions(['user:read:own']),
  catchAsysnc(async (req, res) => {
    const userId = 1;
    const response = await getUserById(userId);
    res.send(response);
  }),
);
/**
 * @swagger
 * /users/loginAs/{id}:
 *   patch:
 *     summary: login as an user
 *     tags:
 *       - Users
 *     responses:
 *       400:
 *         $ref: '#/components/responses/400Err'
 *       403:
 *         $ref:  '#/components/responses/403Err'
 */
userRouter.patch(
  "/loginAs/:id",
  validAuth,
  authorizeRoles(['admin', 'owner']),
  expressValidator.param("id").isUUID().notEmpty().escape(),
  catchAsysnc(async (req, res) => {
    const userId = req.params.id;
    const response = await loginAs(userId);
    res.send(response);
  }),
);

// /** 
//  * @swagger
//  * /users/role:
//  *   get:
//  *     summary: get all roles (admin)
//  *     tags: [Roles,Users]
//  *     responses:
//  *       400:
//  *         $ref: '#/components/responses/400Err'
//  *       403:
//  *         $ref:  '#/components/responses/403Err'
//  * 
//  */
// // role system routers
// userRouter.get(
//   "role/list",
//   catchAsysnc(async (req, res) => {
//     const data = await getRoleList();
//     res.send(data);
//   }),
// );
// /**
//  * @swagger
//  * /users/role/{id}/{roleId}:
//  *   patch:
//  *     summary: add role to an user (admin)
//  *     tags:
//  *       - Users
//  *       - Roles
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *       - in: path
//  *         name: roleId
//  *         required: true
//  *     responses:
//  *       400:
//  *         $ref: '#/components/responses/400Err'
//  *       403:
//  *         $ref:  '#/components/responses/403Err'
//  *   delete:
//  *     summary: delete role from an user (admin)
//  *     tags:
//  *       - Users
//  *       - Roles
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *       - in: path
//  *         name: roleId
//  *         required: true
//  *     responses:
//  *       400:
//  *         $ref: '#/components/responses/400Err'
//  *       403:
//  *         $ref:  '#/components/responses/403Err'
//  */
// userRouter.patch(
//   "role/:id/:roleId",
//   expressValidator.param("id").notEmpty().isUUID(),
//   expressValidator.param("roleId").notEmpty().isUUID(),
//   catchAsysnc(async (req, res) => {
//     await addRole(req.params.id, req.params.roleId);
//     res.send(true);
//   }),
// );
// userRouter.delete(
//   "role/:id/:roleId",
//   expressValidator.param("id").notEmpty().isUUID(),
//   expressValidator.param("roleId").notEmpty().isUUID(),
//   catchAsysnc(async (req, res) => {
//     await deleteRole(req.params.id, req.params.roleId);
//     res.send(true);
//   }),
// );
module.exports = userRouter;
