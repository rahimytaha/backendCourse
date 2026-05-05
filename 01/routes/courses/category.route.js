const express = require("express");
const catchAsysnc = require("../../utils/catchAsync.util");
const courseCategoryRouter = express.Router();
const validation = require("express-validator");
const courseCategoryService = require("../../services/course/category.service");
const { errorResponseValidation } = require("../../utils/validation.util");
const logger = require("../../utils/logger");
const { validAuth, authorizePermissions } = require("../../utils/auth.util");

/**
 * @swagger
 * tags:
 *   name: Course Categories
 */

/**
 * @swagger
 * /courseCategory:
 *   post:
 *     summary: Create a new course category
 *     tags: [Course Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Created category
 */
courseCategoryRouter.post(
  "/",
  validAuth,
  authorizePermissions(["courseCategory:create"]),
  validation.body("title").notEmpty().escape(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const newCategory = await courseCategoryService.addCategory(req.body.title, undefined);
    logger.info(`Creating a category with id ${newCategory.id}`);
    res.send(newCategory);
  }),
);

/**
 * @swagger
 * /courseCategory:
 *   get:
 *     summary: Get list of all course categories
 *     tags: [Course Categories]
 *     responses:
 *       200:
 *         description: List of categories
 */
courseCategoryRouter.get(
  "/",
  catchAsysnc(async (req, res) => {
    const data = await courseCategoryService.listCategory();
    logger.info(`Fetching course category list`);
    res.send(data);
  }),
);

/**
 * @swagger
 * /courseCategory/{catId}/{courseId}:
 *   patch:
 *     summary: Add a course to a category
 *     tags: [Course Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: catId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Operation successful
 */
courseCategoryRouter.patch(
  "/:catId/:courseId",
  validAuth,
  authorizePermissions(["courseCategoryRelation:create"]),
  validation.param("catId").notEmpty().escape().isUUID(),
  validation.param("courseId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { catId, courseId } = req.params;
    await courseCategoryService.addCourseCategory(catId, courseId);
    logger.info(`Adding course ${courseId} to category ${catId}`);
    res.send(true);
  }),
);

/**
 * @swagger
 * /courseCategory/course/{courseCatId}:
 *   delete:
 *     summary: Remove a course from a category
 *     tags: [Course Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseCatId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Deletion successful
 */
courseCategoryRouter.delete(
  "/course/:courseCatId",
  validAuth,
  authorizePermissions(["courseCategoryRelation:delete"]),
  validation.param("courseCatId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { courseCatId } = req.params;
    await courseCategoryService.deleteCourseCategory(courseCatId);
    logger.info(`Deleting course-category relation with id ${courseCatId}`);
    res.send(true);
  }),
);

/**
 * @swagger
 * /courseCategory/{catId}:
 *   delete:
 *     summary: Delete a course category by ID
 *     tags: [Course Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: catId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Deletion successful
 */
courseCategoryRouter.delete(
  "/:catId",
  validAuth,
  authorizePermissions(["courseCategory:delete"]),
  validation.param("catId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { catId } = req.params;
    await courseCategoryService.deleteCategory(catId);
    logger.info(`Deleting course category with id ${catId}`);
    res.send(true);
  }),
);

/**
 * @swagger
 * /courseCategory/{catId}:
 *   put:
 *     summary: Update a course category
 *     tags: [Course Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: catId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: Update successful
 */
courseCategoryRouter.put(
  "/:catId",
  validAuth,
  authorizePermissions(["courseCategory:update"]),
  validation.param("catId").notEmpty().escape().isUUID(),
  validation.body("title").notEmpty().escape(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { catId } = req.params;
    const { title } = req.body;
    await courseCategoryService.updateCategory(catId, title, undefined);
    logger.info(`Updating course category with id ${catId}`);
    res.send(true);
  }),
);

/**
 * @swagger
 * /courseCategory/{catId}:
 *   get:
 *     summary: Get a course category by ID
 *     tags: [Course Categories]
 *     parameters:
 *       - in: path
 *         name: catId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Category details
 */
courseCategoryRouter.get(
  "/:catId",
  validation.param("catId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { catId } = req.params;
    const data = await courseCategoryService.detailCategory(catId);
    logger.info(`Fetching course category with id ${catId}`);
    res.send(data);
  }),
);

module.exports = { courseCategoryRouter };