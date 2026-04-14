const express = require("express");

const { getAllUsers } = require("../../services/users/index.service");
const errorResponseValidation = require("../../utils/validation.util");
const catchAsysnc = require("../../utils/catchAsync.util");
const userRouter = express.Router();

userRouter.get(
  "/all",
  catchAsysnc(async (req, res, next) => {
    errorResponseValidation(req, res);
    const data =await getAllUsers();
    res.send(data);
  }),
);

module.exports = userRouter;
