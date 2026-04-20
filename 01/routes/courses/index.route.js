const express = require("express");
const courseRouter = express.Router();
const courseService = require("../../services/course/index.service");
const catchAsysnc = require("../../utils/catchAsync.util");
const validator = require("express-validator");

courseRouter.get(
  "/",
  catchAsysnc(async (req, res) => {}),
);
courseRouter.get(
  "/mine",
  catchAsysnc(async (req, res) => {}),
);
courseRouter.post(
  "/",
  catchAsysnc(async (req, res) => {}),
);
courseRouter.get(
  "/:id",
  catchAsysnc(async (req, res) => {}),
);
courseRouter.patch(
  "/:id",
  catchAsysnc(async (req, res) => {}),
);
courseRouter.put(
  "/:id",
  catchAsysnc(async (req, res) => {}),
);
courseRouter.delete(
  "/:id",
  catchAsysnc(async (req, res) => {}),
);
module.exports = courseRouter;
