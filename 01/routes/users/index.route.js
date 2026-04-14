const express = require("express");

const { getAllUsers } = require("../../services/users/index.service");
const errorResponseValidation = require("../../utils/validation.util");
const userRouter = express.Router();

userRouter.get("/all", async (req, res) => {
  errorResponseValidation(req, res);
  const data = getAllUsers();
  res.send(data);
});

module.exports = userRouter;
