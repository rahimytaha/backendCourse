const express = require("express");
const courseSessionRoute = express.Router();
const courseSessionService = require("../../services/course/session.service");
const catchAsysnc = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const validator = await require("express-validator");

courseSessionRoute.post(
  "/:courseId",
  validator.param("courseId").notEmpty().isUUID(),
  validator.body("title").notEmpty().isString().escape(),
  validator.body("text").notEmpty().isString().escape(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const courseId = req.params.courseId;
    const { title, text } = req.body;
    const userId = "xx";
    await courseSessionService.addCourseSession(
      title,
      text,
      undefined,
      courseId,
    );
    logger.info(`Add Course Session by admin ${userId} for course ${courseId}`);
    res.send(true);
  }),
);
courseSessionRoute.get(
  "/:courseId",
  validator.param("courseId").notEmpty().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const courseId = req.params.courseId;
    const data = await courseSessionService.getCourseSessions(courseId);
    logger.info(`Fetching Course Session  for course ${courseId}`);
    res.send(data);
  }),
);
courseSessionRoute.delete(
  "/:id",
  validator.param("id").notEmpty().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const id = req.params.id;
    const data = await courseSessionService.deleteCourseSessions(id);
    logger.info(`Deleting Course Session with id ${id}`);
    res.send(true);
  }),
);

module.exports = { courseSessionRoute };
