const express = require("express");
const courseRateRoute = express.Router();
const courseRateService = require("../../services/course/rate.service");
const catchAsysnc = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const validator = await require("express-validator");

courseFavoriteRoute.post(
  "/:courseId/:rate",
  validator.param("courseId").notEmpty().isUUID(),
  validator.param("rate").notEmpty().toFloat(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const courseId = req.params.courseId;
    const rate = req.params.rate;
    const userId = "xx";
    await courseRateService.addRate(courseId, userId, rate);
    logger.info(`Add Course Rate by user ${userId} for course ${courseId}`);
    res.send(true);
  }),
);
module.exports = { courseRateRoute };
