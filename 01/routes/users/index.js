const express = require("express");
const customPrismaClient = require("../../utils/client.util");
const userRouter = express.Router();

userRouter.post("/all", async(req, res) => {
  errorResponseValidation(req, res);
  // const users = await customPrismaClient.
});

module.exports = userRouter;

