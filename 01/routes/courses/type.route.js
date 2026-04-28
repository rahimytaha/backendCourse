const express = require("express");
const courseTypeRoute = express.Router();
const courseTypeService = require("../../services/course/type.service");
const catchAsysnc = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const validator = await require("express-validator");

courseTypeRoute.delete(
  "/:id",
  validator.param("id").notEmpty().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const id = req.params.id;
    const data = await courseTypeService.deleteType(id);
    logger.info(`Deleting Course Type  with id${courseId}`);
    res.send(data);
  }),
);
courseTypeRoute.get(
  "/",
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await courseTypeService.allTypes();
    logger.info(`Fetching Course Types list`);
    res.send(data);
  }),
);
courseTypeRoute.post(
  "/",
  validator.body("title").notEmpty().isString().escape(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const title = req.body.title;
    const data = await courseTypeService.createType(title, undefined);
    logger.info(`Creating Course Type  with id${data.id}`);
    res.send(data);
  }),
);

module.exports = { courseTypeRoute };
