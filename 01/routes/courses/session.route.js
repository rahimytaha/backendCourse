const express = require("express");
const courseSessionRoute = express.Router();
const courseSessionService = require("../../services/course/session.service");
const catchAsysnc = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const validator = require("express-validator");
const logger = require("../../utils/logger");
const { validAuth, authorizePermissions } = require("../../utils/auth.util");

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
  validAuth,
  authorizePermissions(["courseSession:create"]),
  validator.param("courseId").notEmpty().isUUID(),
  validator.body("title").notEmpty().isString().escape(),
  validator.body("text").notEmpty().isString().escape(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const courseId = req.params.courseId;
    const { title, text } = req.body;
    const userId = req.user.id;
    // توجه: پارامتر userId به سرویس ارسال نشده بود؛ در صورت نیاز می‌توانید آن را اضافه کنید
    await courseSessionService.addCourseSession(
      title,
      text,
      undefined, // parentId
      courseId,
    );
    logger.info(`Add Course Session by user ${userId} for course ${courseId}`);
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
// این مسیر عمومی است و نیازی به احراز هویت ندارد
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
  validAuth,
  authorizePermissions(["courseSession:delete"]),
  validator.param("id").notEmpty().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const id = req.params.id;
    const userId = req.user.id;
    // در صورت نیاز به بررسی مالکیت، userId را به سرویس ارسال کنید
    await courseSessionService.deleteCourseSessions(id);
    logger.info(`Deleting Course Session with id ${id} by user ${userId}`);
    res.send(true);
  }),
);

module.exports = { courseSessionRoute };