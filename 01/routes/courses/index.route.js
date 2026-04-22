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

/**
 * GET endpoint to retrieve paginated list of courses for regular users
 * @name GET /api/courses/
 * @function
 * @memberof module:courseRouter
 * @param {Object} req - Express request object
 * @param {Object} req.query - Query parameters
 * @param {number} req.query.page - Page number for pagination
 * @param {number} req.query.perPage - Number of items per page
 * @param {string} req.query.query - Search query string
 * @param {string} req.query.orderBy - Field to order results by
 * @param {string} req.query.orderType - Sort order (ASC/DESC)
 * @param {number} req.query.minPrice - Minimum price filter
 * @param {number} req.query.maxPrice - Maximum price filter
 * @param {number} req.query.minRate - Minimum rating filter
 * @param {number} req.query.maxRate - Maximum rating filter
 * @param {string} req.query.typeId - Course type ID filter
 * @param {string} req.query.categoryRequirment - Category requirement filter
 * @param {string} req.query.categoryList - Category list filter
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns paginated course data for users
 */
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

/**
 * GET endpoint to retrieve paginated list of courses for admin users
 * @name GET /api/courses/admin
 * @function
 * @memberof module:courseRouter
 * @param {Object} req - Express request object
 * @param {Object} req.query - Query parameters
 * @param {number} req.query.page - Page number for pagination
 * @param {number} req.query.perPage - Number of items per page
 * @param {string} req.query.query - Search query string
 * @param {string} req.query.orderBy - Field to order results by
 * @param {string} req.query.orderType - Sort order (ASC/DESC)
 * @param {number} req.query.minPrice - Minimum price filter
 * @param {number} req.query.maxPrice - Maximum price filter
 * @param {number} req.query.minRate - Minimum rating filter
 * @param {number} req.query.maxRate - Maximum rating filter
 * @param {string} req.query.typeId - Course type ID filter
 * @param {string} req.query.categoryRequirment - Category requirement filter
 * @param {string} req.query.categoryList - Category list filter
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns paginated course data for admin users
 */
courseRouter.get(
  "/admin",
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

/**
 * GET endpoint to retrieve courses belonging to the authenticated teacher
 * @name GET /api/courses/mine
 * @function
 * @memberof module:courseRouter
 * @param {Object} req - Express request object
 * @param {Object} req.query - Query parameters
 * @param {number} req.query.page - Page number for pagination
 * @param {number} req.query.perPage - Number of items per page
 * @param {string} req.query.query - Search query string
 * @param {string} req.query.orderBy - Field to order results by
 * @param {string} req.query.orderType - Sort order (ASC/DESC)
 * @param {number} req.query.minPrice - Minimum price filter
 * @param {number} req.query.maxPrice - Maximum price filter
 * @param {number} req.query.minRate - Minimum rating filter
 * @param {number} req.query.maxRate - Maximum rating filter
 * @param {string} req.query.typeId - Course type ID filter
 * @param {string} req.query.categoryRequirment - Category requirement filter
 * @param {string} req.query.categoryList - Category list filter
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns paginated course data for the authenticated teacher
 */
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

/**
 * POST endpoint to create a new course (admin only)
 * @name POST /api/courses/admin
 * @function
 * @memberof module:courseRouter
 * @param {Object} req - Express request object
 * @param {Object} req.body - Course data
 * @param {string} req.body.description - Full course description
 * @param {string} req.body.mini_description - Short course description
 * @param {string} req.body.picture - Course picture URL or path
 * @param {string} req.body.google_title - SEO title for Google
 * @param {string} req.body.google_description - SEO description for Google
 * @param {string} req.body.type_id - Course type identifier
 * @param {boolean} [req.body.isActive=false] - Course activation status
 * @param {number} req.body.price - Course price
 * @param {number} req.body.discount - Course discount amount
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns the newly created course object
 */
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

/**
 * GET endpoint to retrieve detailed course information for regular users
 * @name GET /api/courses/user/:id
 * @function
 * @memberof module:courseRouter
 * @param {Object} req - Express request object
 * @param {Object} req.params - URL parameters
 * @param {string} req.params.id - Course ID
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns detailed course information for user view
 */
courseRouter.get(
  "/user/:id",
  idChain(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { id } = req.params;
    const course = await courseService.detailCourse(id, true);
    res.send(course);
  }),
);

/**
 * GET endpoint to retrieve detailed course information for admin users
 * @name GET /api/courses/admin/:id
 * @function
 * @memberof module:courseRouter
 * @param {Object} req - Express request object
 * @param {Object} req.params - URL parameters
 * @param {string} req.params.id - Course ID
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns detailed course information including admin-only fields
 */
courseRouter.get(
  "/admin/:id",
  idChain(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { id } = req.params;
    const course = await courseService.detailCourse(id);
    res.send(course);
  }),
);

/**
 * PATCH endpoint to update course activation status
 * @name PATCH /api/courses/:id/:status
 * @function
 * @memberof module:courseRouter
 * @param {Object} req - Express request object
 * @param {Object} req.params - URL parameters
 * @param {string} req.params.id - Course ID
 * @param {boolean} req.params.status - New activation status (true/false)
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns updated course object with new activation status
 */
courseRouter.patch(
  "/:id/:status",
  idChain(),
  validator.param("status").notEmpty().toBoolean().escape(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { id, status } = req.params;
    const course = await courseService.updateCourse(id, { isActive: status });
    res.send(course);
  }),
);

/**
 * PUT endpoint to completely update a course
 * @name PUT /api/courses/:id
 * @function
 * @memberof module:courseRouter
 * @param {Object} req - Express request object
 * @param {Object} req.params - URL parameters
 * @param {string} req.params.id - Course ID
 * @param {Object} req.body - Updated course data (all fields optional)
 * @param {string} [req.body.description] - Full course description
 * @param {string} [req.body.mini_description] - Short course description
 * @param {string} [req.body.picture] - Course picture URL or path
 * @param {string} [req.body.google_title] - SEO title for Google
 * @param {string} [req.body.google_description] - SEO description for Google
 * @param {string} [req.body.type_id] - Course type identifier
 * @param {boolean} [req.body.isActive=false] - Course activation status
 * @param {number} [req.body.price] - Course price
 * @param {number} [req.body.discount] - Course discount amount
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns the updated course object
 */
courseRouter.put(
  "/:id",
  idChain(),
  validator.body("description").optional().escape().isString(),
  validator.body("mini_description").optional().escape().isString(),
  validator.body("picture").optional().escape().isString(),
  validator.body("google_title").optional().escape().isString(),
  validator.body("google_description").optional().escape().isString(),
  validator.body("type_id").optional().escape().isString(),
  validator
    .body("isActive")
    .optional()
    .escape()
    .optional()
    .isBoolean()
    .default(false),
  validator.body("price").optional().escape().isDecimal(),
  validator.body("discount").optional().escape().isFloat(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { id } = req.params;
    const data = req.body;
    const course = await courseService.updateCourse(id, data);
    res.send(course);
  }),
);

/**
 * DELETE endpoint to remove a course
 * @name DELETE /api/courses/:id
 * @function
 * @memberof module:courseRouter
 * @param {Object} req - Express request object
 * @param {Object} req.params - URL parameters
 * @param {string} req.params.id - Course ID
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns true if deletion was successful
 */
courseRouter.delete(
  "/:id",
  idChain(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { id } = req.params;
    await courseService.deleteCourse(id);
    res.send(true);
  }),
);

module.exports = courseRouter;