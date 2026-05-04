const express = require("express");
const {
  errorResponseValidation,
  pageChain,
  perPageChain,
  queryChain,
  orderByChain,
  orderTypeChain,
} = require("../../utils/validation.util");
const courseCommmentRouter = express.Router();
const courseCommentService = require("../../services/course/comment.service");
const validator = require("express-validator");
const logger = require("../../utils/logger");
const catchAsysnc = require("../../utils/catchAsync.util");
const { validAuth, authorizePermissions } = require("../../utils/auth.util");

/**
 * @swagger
 * tags:
 *   name: Course Comments
 */

/**
 * @swagger
 * /courseComment:
 *   post:
 *     summary: Create a new course comment
 *     tags: [Course Comments]
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
 *               - text
 *               - course_id
 *             properties:
 *               title:
 *                 type: string
 *               course_id:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Created comment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
courseCommmentRouter.post(
  "/",
  validAuth,
  authorizePermissions(["courseComment:create"]),
  validator.body("title").notEmpty().escape().isString(),
  validator.body("text").notEmpty().escape().isString(),
  validator.body("course_id").notEmpty().escape().isString(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const userId = req.user.id;
    const newComment = await courseCommentService.createComment(
      req.body,
      undefined,
      userId,
    );
    logger.info(
      `Adding a course comment with id ${newComment.id} by user with id ${userId}`,
    );
    res.send(newComment);
  }),
);

/**
 * @swagger
 * /courseComment/child/{parentId}:
 *   post:
 *     summary: Create a reply to an existing comment
 *     tags: [Course Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: parentId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Parent comment ID
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
 *         description: Created reply comment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
courseCommmentRouter.post(
  "/child/:parentId",
  validAuth,
  authorizePermissions(["courseComment:create"]),
  validator.body("title").notEmpty().escape().isString(),
  validator.body("text").notEmpty().escape().isString(),
  validator.param("parentId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const userId = req.user.id;
    const parentId = req.params.parentId;
    // توجه: احتمالاً باید parentId را به سرویس ارسال کنید، کد قبلی userId را به اشتباه به عنوان parentId فرستاده بود
    const newComment = await courseCommentService.createComment(
      req.body,
      parentId,   // اصلاح ارسال parentId
      userId,
    );
    logger.info(
      `Adding a course comment reply with id ${newComment.id} by user with id ${userId}`,
    );
    res.send(newComment);
  }),
);

/**
 * @swagger
 * /courseComment/{id}:
 *   delete:
 *     summary: Delete a course comment by ID (owner or admin)
 *     tags: [Course Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Comment ID
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Deleted comment data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
courseCommmentRouter.delete(
  "/:id",
  validAuth,
  authorizePermissions(["courseComment:delete:own", "courseComment:delete:any"]),
  validator.param("id").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { id } = req.params;
    const data = await courseCommentService.deleteComment(id, req.user.id);
    logger.info(
      `Deleting a course comment with id ${id} by user with id ${req.user.id}`,
    );
    res.send(data);
  }),
);

/**
 * @swagger
 * /courseComment:
 *   get:
 *     summary: Get list of course comments (admin)
 *     tags: [Course Comments]
 *     security:
 *       - bearerAuth: []
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
 *         name: isActive
 *         required: true
 *         schema:
 *           type: boolean
 *       - in: query
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: List of comments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
courseCommmentRouter.get(
  "/",
  validAuth,
  authorizePermissions(["courseComment:read", "courseComment:list:any"]),
  pageChain(),
  perPageChain(),
  queryChain(),
  orderByChain(),
  orderTypeChain(),
  validator.query("isActive").notEmpty().escape().toBoolean(),
  validator.query("courseId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { page, perPage, query, orderBy, orderType, isActive, courseId } =
      req.query;
    const data = await courseCommentService.listComment(
      page,
      perPage,
      query,
      orderBy,
      orderType,
      courseId,
      isActive,
    );
    logger.info(`Fetching all course comments by admin`);
    res.send(data);
  }),
);

/**
 * @swagger
 * /courseComment/{courseId}:
 *   get:
 *     summary: Get comments for a specific course (public)
 *     tags: [Course Comments]
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Course ID
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
 *     responses:
 *       200:
 *         description: List of active comments for the course
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
// این مسیر عمومی است و نیازی به احراز هویت ندارد
courseCommmentRouter.get(
  "/:courseId",
  pageChain(),
  perPageChain(),
  queryChain(),
  orderByChain(),
  orderTypeChain(),
  validator.param("courseId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { page, perPage, query, orderBy, orderType } = req.query;
    const { courseId } = req.params;
    const data = await courseCommentService.listComment(
      page,
      perPage,
      query,
      orderBy,
      orderType,
      courseId,
      true,
    );
    logger.info(`Fetching all course comments for course ${courseId} by user`);
    res.send(data);
  }),
);

/**
 * @swagger
 * /courseComment/admin/{commentId}:
 *   put:
 *     summary: Update a comment by admin
 *     tags: [Course Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Comment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
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
 *         description: Update successful
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *               example: true
 */
courseCommmentRouter.put(
  "/admin/:commentId",
  validAuth,
  authorizePermissions(["courseComment:update:any"]),
  validator.param("commentId").notEmpty().escape().isUUID(),
  validator.body("title").optional().notEmpty().escape().isString(),
  validator.body("text").optional().notEmpty().escape().isString(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { commentId } = req.params;
    const { title = undefined, text = undefined } = req.body;
    await courseCommentService.updateComment(commentId, { title, text });
    logger.info(`Update Comment With id ${commentId} by admin id ${req.user.id}`);
    res.send(true);
  }),
);

/**
 * @swagger
 * /courseComment/user/{commentId}:
 *   put:
 *     summary: Update a comment by user (owner)
 *     tags: [Course Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Comment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
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
 *         description: Update successful
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *               example: true
 */
courseCommmentRouter.put(
  "/user/:commentId",
  validAuth,
  authorizePermissions(["courseComment:update:own"]),
  validator.param("commentId").notEmpty().escape().isUUID(),
  validator.body("title").optional().notEmpty().escape().isString(),
  validator.body("text").optional().notEmpty().escape().isString(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { commentId } = req.params;
    const { title = undefined, text = undefined } = req.body;
    const userId = req.user.id;
    await courseCommentService.updateComment(
      commentId,
      { title, text },
      userId,
    );
    logger.info(`Update Comment With id ${commentId} by user id ${userId}`);
    res.send(true);
  }),
);

/**
 * @swagger
 * /courseComment/{commentId}:
 *   patch:
 *     summary: Activate a comment (set isActive to true) - admin only
 *     tags: [Course Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Comment ID
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Activation successful
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *               example: true
 */
courseCommmentRouter.patch(
  "/:commentId",
  validAuth,
  authorizePermissions(["courseComment:update:any", "courseComment:activate"]),
  validator.param("commentId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { commentId } = req.params;
    await courseCommentService.updateComment(commentId, { isActive: true });
    logger.info(`Activate a comment with id ${commentId} by admin id ${req.user.id}`);
    res.send(true);
  }),
);

module.exports = { courseCommmentRouter };