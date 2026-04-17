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
userRouter.get(
  "/all",
  expressValidator.query("query").optional().escape(),
  expressValidator.query("page").optional().toInt(),
  expressValidator.query("limit").optional().toInt(),
  expressValidator.query("orderBy").optional().notEmpty(),
  expressValidator.query("orderType").optional().notEmpty,
  catchAsysnc(async (req, res, next) => {
    errorResponseValidation(req, res);
    const { query, page, limit, orderBy, orderType } = req.body;
    const data = await getAllUsers(query, page, limit, orderBy, orderType);
    res.send(data);
  }),
);
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
  catchAsysnc(async (req, res, next) => {
    errorResponseValidation(req, res);
    const data = await createUser(req.body);
    res.send(data);
  }),
);
// update profile by admin with userId

userRouter.put(
  "update/:id",
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
  catchAsysnc(async (req, res, next) => {
    const userId = req.params.id;
    errorResponseValidation(req, res);
    const data = await updateUser(userId, req.body);
    res.send(data);
  }),
);
// update profile by user
userRouter.put(
  "update",

  passwordValidationChain(),
  expressValidator.body("name").notEmpty().escape(),
  expressValidator.body("email").notEmpty().escape().isEmail(),
  expressValidator
    .body("phone_number")
    .notEmpty()
    .escape()
    .isMobilePhone("fa-IR"),
  expressValidator.body("location").notEmpty().escape(),
  catchAsysnc(async (req, res, next) => {
    const userId = 1;
    errorResponseValidation(req, res);
    const data = await updateUser(userId, req.body);
    res.send(data);
  }),
);
userRouter.delete(
  "/delete/:id",
  expressValidator.param("id").isUUID().notEmpty().escape(),
  catchAsysnc(async (req, res) => {
    const userId = req.params.id;
    const response = await deleteUser(userId);
    res.send(response);
  }),
);
// get user detail for admin by admin with userId
userRouter.get(
  "/profile/:id",
  expressValidator.param("id").isUUID().notEmpty().escape(),
  catchAsysnc(async (req, res) => {
    const userId = req.params.id;
    const response = await getUserById(userId);
    res.send(response);
  }),
);
// get user detail by user with itself token
userRouter.get(
  "/profile",
  catchAsysnc(async (req, res) => {
    const userId = 1;
    const response = await getUserById(userId);
    res.send(response);
  }),
);
userRouter.patch(
  "/loginAs/:id",
  expressValidator.param("id").isUUID().notEmpty().escape(),
  catchAsysnc(async (req, res) => {
    const userId = req.params.id;
    const response = await loginAs(userId);
    res.send(response);
  }),
);

// role system routers
userRouter.get(
  "role/list",
  catchAsysnc(async (req, res) => {
    const data = await getRoleList();
    res.send(data);
  }),
);
userRouter.patch(
  "role/:id/:roleId",
  expressValidator.param("id").notEmpty().isUUID(),
  expressValidator.param("roleId").notEmpty().isUUID(),
  catchAsysnc(async (req, res) => {
    await addRole(req.params.id, req.params.roleId);
    res.send(true);
  }),
);
userRouter.delete(
  "role/:id/:roleId",
  expressValidator.param("id").notEmpty().isUUID(),
  expressValidator.param("roleId").notEmpty().isUUID(),
  catchAsysnc(async (req, res) => {
    await deleteRole(req.params.id, req.params.roleId);
    res.send(true);
  }),
);
module.exports = userRouter;
