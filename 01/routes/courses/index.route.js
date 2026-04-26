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
const { validAuth, authorizePermissions } = require("../../utils/auth.util");

/**
 * @swagger
 * /course:
 *   get:
 *     summary: Get list of courses (public)
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 0
 *       - in: query
 *         name: perPage
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *           default: ""
 *       - in: query
 *         name: orderBy
 *         schema:
 *           type: string
 *       - in: query
 *         name: orderType
 *         schema:
 *           type: string
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: integer
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: integer
 *       - in: query
 *         name: minRate
 *         schema:
 *           type: integer
 *       - in: query
 *         name: maxRate
 *         schema:
 *           type: integer
 *       - in: query
 *         name: typeId
 *         schema:
 *           type: string
 *           format: uuid
 *       - in: query
 *         name: categoryRequirment
 *         schema:
 *           type: integer
 *       - in: query
 *         name: categoryList
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: List of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: object
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
 * @swagger
 * /course/admin:
 *   get:
 *     summary: Get list of courses (admin)
 *     tags:
 *       -  Courses
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 0
 *       - in: query
 *         name: perPage
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *           default: ""
 *       - in: query
 *         name: orderBy
 *         schema:
 *           type: string
 *       - in: query
 *         name: orderType
 *         schema:
 *           type: string
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: integer
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: integer
 *       - in: query
 *         name: minRate
 *         schema:
 *           type: integer
 *       - in: query
 *         name: maxRate
 *         schema:
 *           type: integer
 *       - in: query
 *         name: typeId
 *         schema:
 *           type: string
 *           format: uuid
 *       - in: query
 *         name: categoryRequirment
 *         schema:
 *           type: integer
 *       - in: query
 *         name: categoryList
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: List of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
courseRouter.get(
  "/admin",
  validAuth,
  authorizePermissions(["course:read:any"]),
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
 * @swagger
 * /course/mine:
 *   get:
 *     summary: Get my courses (authenticated user)
 *     tags:
 *       -  Courses
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 0
 *       - in: query
 *         name: perPage
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *           default: ""
 *       - in: query
 *         name: orderBy
 *         schema:
 *           type: string
 *       - in: query
 *         name: orderType
 *         schema:
 *           type: string
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: integer
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: integer
 *       - in: query
 *         name: minRate
 *         schema:
 *           type: integer
 *       - in: query
 *         name: maxRate
 *         schema:
 *           type: integer
 *       - in: query
 *         name: typeId
 *         schema:
 *           type: string
 *           format: uuid
 *       - in: query
 *         name: categoryRequirment
 *         schema:
 *           type: integer
 *       - in: query
 *         name: categoryList
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: List of my courses
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
courseRouter.get(
  "/mine",
  validAuth,
  authorizePermissions(["course:read:own"]),
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
 * @swagger
 * /course/admin:
 *   post:
 *     summary: Create a new course (admin)
 *     tags:
 *       -  Courses
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *               - mini_description
 *               - picture
 *               - google_title
 *               - google_description
 *               - type_id
 *               - price
 *               - discount
 *             properties:
 *               description:
 *                 type: string
 *               mini_description:
 *                 type: string
 *               picture:
 *                 type: string
 *               google_title:
 *                 type: string
 *               google_description:
 *                 type: string
 *               type_id:
 *                 type: string
 *                 format: uuid
 *               isActive:
 *                 type: boolean
 *                 default: false
 *               price:
 *                 type: number
 *               discount:
 *                 type: number
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Created course
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
courseRouter.post(
  "/admin",
  validAuth,
  authorizePermissions(["course:create"]),
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
 * @swagger
 * /course/user/{id}:
 *   get:
 *     summary: Get course details for user
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Course ID
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Course details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
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
 * @swagger
 * /course/admin/{id}:
 *   get:
 *     summary: Get course details for admin
 *     tags:
 *       -  Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Course ID
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Course details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
courseRouter.get(
  "/admin/:id",
  validAuth,
  authorizePermissions(["course:read:any"]),
  idChain(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { id } = req.params;
    const course = await courseService.detailCourse(id);
    res.send(course);
  }),
);

/**
 * @swagger
 * /course/{id}/{status}:
 *   patch:
 *     summary: Activate/deactivate a course
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Course ID
 *       - in: path
 *         name: status
 *         required: true
 *         schema:
 *           type: boolean
 *         description: New active status (true/false)
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Updated course
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
courseRouter.patch(
  "/:id/:status",
  validAuth,
  authorizePermissions(["course:update:own"]),
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
 * @swagger
 * /course/{id}:
 *   put:
 *     summary: Fully update a course
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Course ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               mini_description:
 *                 type: string
 *               picture:
 *                 type: string
 *               google_title:
 *                 type: string
 *               google_description:
 *                 type: string
 *               type_id:
 *                 type: string
 *                 format: uuid
 *               isActive:
 *                 type: boolean
 *                 default: false
 *               price:
 *                 type: number
 *               discount:
 *                 type: number
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Updated course
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
courseRouter.put(
  "/:id",
  validAuth,
  authorizePermissions(["course:update:own"]),
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
 * @swagger
 * /course/{id}:
 *   delete:
 *     summary: Delete a course
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Course ID
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Deletion successful
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *               example: true
 */
courseRouter.delete(
  "/:id",
  validAuth,
  authorizePermissions(["course:update:own"]),
  idChain(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { id } = req.params;
    await courseService.deleteCourse(id);
    res.send(true);
  }),
);

module.exports = courseRouter;