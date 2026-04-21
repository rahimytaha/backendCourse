const express = require("express");
const courseRouter = express.Router();
const courseService = require("../../services/course/index.service");
const catchAsysnc = require("../../utils/catchAsync.util");
const validator = require("express-validator");
const {
  pageChain,
  perPageChain,
  queryChain,
  orderByChain,
  orderTypeChain,
  minPriceChain,
  maxPriceChain,
  minRateChain,
  maxRateChain,
  typeIdChain,
  idChain,
  categoryRequirmentChain,
  categoryListChain,
  errorResponseValidation,
} = require("../../utils/validation.util");
const courseService = require("../../services/course/index.service");
// get courses list for user
courseRouter.get(
  "/",
  pageChain(),
  perPageChain(),
  queryChain(),
  orderByChain(),
  orderTypeChain(),
  minPriceChain(),
  maxPriceChain(),
  minRateChain(),
  maxRateChain(),
  typeIdChain(),
  categoryRequirmentChain(),
  categoryListChain(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const {
      page,
      perPage,
      query,
      orderBy,
      orderType,
      maxPrice,
      minPrice,
      maxRate,
      minRate,
      typeId,
      categoryRequirment,
      categoryList,
    } = req.query;
    const data = await courseService.allCourses(
      page,
      perPage,
      query,
      orderBy,
      orderType,
      categoryList,
      true,
      minPrice,
      maxPrice,
      minRate,
      maxRate,
      typeId,
      categoryRequirment,
    );
    res.send(data);
  }),
);
// get courses list for admin
courseRouter.get(
  "/",
  pageChain(),
  perPageChain(),
  queryChain(),
  orderByChain(),
  orderTypeChain(),
  minPriceChain(),
  maxPriceChain(),
  minRateChain(),
  maxRateChain(),
  typeIdChain(),
  categoryRequirmentChain(),
  categoryListChain(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const {
      page,
      perPage,
      query,
      orderBy,
      orderType,
      maxPrice,
      minPrice,
      maxRate,
      minRate,
      typeId,
      categoryRequirment,
      categoryList,
    } = req.query;
    const data = await courseService.allCourses(
      page,
      perPage,
      query,
      orderBy,
      orderType,
      categoryList,
      true,
      minPrice,
      maxPrice,
      minRate,
      maxRate,
      typeId,
      categoryRequirment,
    );
    res.send(data);
  }),
);
// get courses list for teachers
courseRouter.get(
  "/mine",
  pageChain(),
  perPageChain(),
  queryChain(),
  orderByChain(),
  orderTypeChain(),
  minPriceChain(),
  maxPriceChain(),
  minRateChain(),
  maxRateChain(),
  typeIdChain(),
  categoryRequirmentChain(),
  categoryListChain(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const {
      page,
      perPage,
      query,
      orderBy,
      orderType,
      maxPrice,
      minPrice,
      maxRate,
      minRate,
      typeId,
      categoryRequirment,
      categoryList,
    } = req.query;
    const data = await courseService.allCourses(
      page,
      perPage,
      query,
      orderBy,
      orderType,
      categoryList,
      true,
      minPrice,
      maxPrice,
      minRate,
      maxRate,
      typeId,
      categoryRequirment,
    );
    res.send(data);
  }),
);

courseRouter.post(
  "/admin",
  validator.body("description").escape().notEmpty().isString(),
  validator.body("mini_description").escape().notEmpty().isString(),
  validator.body("picture").escape().notEmpty().isString(),
  validator.body("google_title").escape().notEmpty().isString(),
  validator.body("google_description").escape().notEmpty().isString(),
  validator.body("type_id").escape().notEmpty().isString(),
  validator.body("isActive").escape().optional().isBoolean().default(false),
  validator.body("price").escape().isDecimal(),
  validator.body("discount").escape().isFloat(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const data = req.body;
    const newCourse = await courseService.createCourse(data);
    res.send(newCourse);
  }),
);
// detail by role user
courseRouter.get(
  "user/:id",
  idChain(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { id } = req.params;
    const course = await courseService.detailCourse(id, true);
    res.send(course);
  }),
);

// by role admin
courseRouter.get(
  "admin/:id",
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { id } = req.params;
    const course = await courseService.detailCourse(id);
    res.send(course);
  }),
);
// change activation
courseRouter.patch(
  "/:id",
  catchAsysnc(async (req, res) => {}),
);
// update
courseRouter.put(
  "/:id",
  catchAsysnc(async (req, res) => {}),
);
//delete
courseRouter.delete(
  "/:id",
  catchAsysnc(async (req, res) => {}),
);
module.exports = courseRouter;
