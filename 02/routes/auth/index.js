let users = [];

const express = require("express");
const authRouter = express.Router();
const authUtil = require("../../utils/auth.util");
const expressValdator = require("express-validator");

const nameValidationChain = () =>
  expressValdator.body("name").notEmpty().escape();
const passwordValidationChain = () =>
  expressValdator
    .body("password")
    .notEmpty()
    .escape()
    .isLength({ min: 8 })
    .withMessage("it's not a VALID password");

const passwordConfirm = () => {};
const emailInUseCheck = () => {};

const emailValidationChain = () =>
  expressValdator.body("email").notEmpty().escape().isEmail();



authRouter.post(
  "/registerReq",

  emailValidationChain(),
  // .custom(emailInUseCheck()),
  nameValidationChain(),
  passwordValidationChain(),
  // .custom(passwordConfirm()),
  expressValdator.body("phone_number").isMobilePhone("fa-IR").escape(),

  (req, res) => {
    errorResponseValidation(req, res);
    console.log("object");
    // const { name, email, password, phone_number } = req.body;
  },
);

authRouter.patch("/registerAccept/:email", (req, res) => {
  const { email } = req.params;
});

authRouter.post("/login/twoFactor", (req, res) => {});
authRouter.post("/login", (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
});

module.exports = authRouter;
