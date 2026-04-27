const express = require("express");
const catchAsysnc = require("../../utils/catchAsync.util");
const courseCategoryRouter = express.Router();
const validation = require("express-validator");
const courseCategoryService = require("../../services/course/category.service");
const { errorResponseValidation } = require("../../utils/validation.util");
const logger = require("../../utils/logger");
courseCategoryRouter.post(
  "/",
  validation.body("title").notEmpty().escape(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const newCategory = await courseCategoryService.addCategory(
      req.body.title,
      undefined,
    );
    logger.info(
      `Creating a category by userId xx and category id ${newCategory.id}`,
    );
    res.send(newCategory);
  }),
);
courseCategoryRouter.get(
  "/",
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);

    const data = await courseCategoryService.listCategory();
    logger.info(`Fetching course category list`);
    res.send(data);
  }),
);
courseCategoryRouter.patch(
  "/:catId/:courseId",
  validation.param("catId").notEmpty().escape().isUUID(),
  validation.param("courseId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);

    const { catId, courseId } = req.params;
    await courseCategoryService.addCourseCategory(catId, courseId);
    await logger.info(
      `Adding course id ${courseId} to category with id ${catId}`,
    );
    res.send(true);
  }),
);
courseCategoryRouter.delete(
  "/course/:courseCatId",
  validation.param("courseCatId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { courseCatId } = req.params;
    await courseCategoryService.deleteCourseCategory(courseCatId);
    await logger.info(
      `deleting course category (manyToMany) with id ${courseCatId} by user id xx`,
    );
    res.send(true);
  }),
);
courseCategoryRouter.delete(
  "/:catId",
  validation.param("catId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { catId } = req.params;
    await courseCategoryService.deleteCategory(catId);
    await logger.info(
      `deleting course category with id ${catId} by user id xx`,
    );
    res.send(true);
  }),
);

courseCategoryRouter.put(
  "/:catId",
  validation.param("catId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { catId } = req.params;
    const { title } = req.body;
    await courseCategoryService.updateCategory(catId, title, undefined);
    await logger.info(`update course category with id ${catId} by user id xx`);
    res.send(true);
  }),
);
courseCategoryRouter.get(
  "/:catId",
  validation.param("catId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { catId } = req.params;
    await courseCategoryService.detailCategory(catId, );
    await logger.info(`get course category with id ${catId} by user id xx`);
    res.send(true);
  }),
);

module.exports = { courseCategoryRouter };
