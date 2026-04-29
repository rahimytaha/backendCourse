const express = require("express");
const courseSessionRoute = express.Router();
const courseSessionService = require("../../services/course/session.service");
const catchAsysnc = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const validator = require("express-validator");
const logger = require("../../utils/logger");

/**
 * @swagger
 * tags:
 *   name: Course Sessions
 *   description: Course sessions management
 */

/**
 * @swagger
 * /courseSession/{courseId}:
 *   post:
 *     summary: Create a new course session
 *     tags: [Course Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseId
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
 *             required:
 *               - title
 *               - text
 *             properties:
 *               title:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Session created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *               example: true
 */
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

/**
 * @swagger
 * /courseSession/{courseId}:
 *   get:
 *     summary: Get all sessions for a course
 *     tags: [Course Sessions]
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Course ID
 *     responses:
 *       200:
 *         description: List of course sessions
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
 *                   text:
 *                     type: string
 *                   courseId:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 */
courseSessionRoute.get(
  "/:courseId",
  validator.param("courseId").notEmpty().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const courseId = req.params.courseId;
    const data = await courseSessionService.getCourseSessions(courseId);
    logger.info(`Fetching Course Session for course ${courseId}`);
    res.send(data);
  }),
);

/**
 * @swagger
 * /courseSession/{id}:
 *   delete:
 *     summary: Delete a course session
 *     tags: [Course Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Session ID
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Session deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *               example: true
 */
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