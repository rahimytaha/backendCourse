const express = require("express");
const courseTypeRoute = express.Router();
const courseTypeService = require("../../services/course/type.service");
const catchAsysnc = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const validator = require("express-validator");
const logger = require("../../utils/logger");

/**
 * @swagger
 * tags:
 *   name: Course Types
 *   description: Course types management
 */

/**
 * @swagger
 * /courseType:
 *   get:
 *     summary: Get all course types
 *     tags: [Course Types]
 *     responses:
 *       200:
 *         description: List of course types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                   title:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 */
courseTypeRoute.get(
  "/",
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await courseTypeService.allTypes();
    logger.info(`Fetching Course Types list`);
    res.send(data);
  }),
);

/**
 * @swagger
 * /courseType:
 *   post:
 *     summary: Create a new course type
 *     tags: [Course Types]
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
 *         description: Created course type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                 title:
 *                   type: string
 */
courseTypeRoute.post(
  "/",
  validator.body("title").notEmpty().isString().escape(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const title = req.body.title;
    const data = await courseTypeService.createType(title, undefined);
    logger.info(`Creating Course Type with id ${data.id}`);
    res.send(data);
  }),
);

/**
 * @swagger
 * /courseType/{id}:
 *   delete:
 *     summary: Delete a course type by ID
 *     tags: [Course Types]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Course type ID
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Deleted course type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
courseTypeRoute.delete(
  "/:id",
  validator.param("id").notEmpty().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const id = req.params.id;
    const data = await courseTypeService.deleteType(id);
    logger.info(`Deleting Course Type with id ${id}`);
    res.send(data);
  }),
);

module.exports = { courseTypeRoute };