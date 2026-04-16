const express = require("express");

const {
  getAllUsers,
  createUser,
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
  catchAsysnc(async (req, res, next) => {
    errorResponseValidation(req, res);
    const data = await getAllUsers();
    res.send(data);
  }),
);
userRouter.get(
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
  passwordValidationChain(),
  catchAsysnc(async (req, res, next) => {
    errorResponseValidation(req, res);
    const data = await createUser();
    res.send(data);
  }),
);
module.exports = userRouter;
