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
 *       200:
 *         description: Created comment
 */
courseCommmentRouter.post(
  "/",
  validAuth,
  authorizePermissions(["courseComment:create"]),
  validator.body("title").notEmpty().escape().isString(),
  validator.body("text").notEmpty().escape().isString(),
  validator.body("course_id").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const userId = req.user.id;
    const newComment = await courseCommentService.createComment(req.body, undefined, userId);
    logger.info(`Adding a course comment with id ${newComment.id} by user ${userId}`);
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
 *               text:
 *                 type: string
 *               course_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Created reply comment
 */
courseCommmentRouter.post(
  "/child/:parentId",
  validAuth,
  authorizePermissions(["courseComment:create"]),
  validator.body("title").notEmpty().escape().isString(),
  validator.body("text").notEmpty().escape().isString(),
  validator.body("course_id").notEmpty().escape().isUUID(),
  validator.param("parentId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const userId = req.user.id;
    const parentId = req.params.parentId;
    const newComment = await courseCommentService.createComment(req.body, parentId, userId);
    logger.info(`Adding a course comment reply with id ${newComment.id} by user ${userId}`);
    res.send(newComment);
  }),
);

/**
 * @swagger
 * /courseComment/{id}:
 *   delete:
 *     summary: Delete a course comment by ID
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
 *     responses:
 *       200:
 *         description: Deleted
 */
courseCommmentRouter.delete(
  "/:id",
  validAuth,
  authorizePermissions(["courseComment:delete:own", "courseComment:delete:any"]),
  validator.param("id").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { id } = req.params;
    await courseCommentService.deleteComment(id);
    logger.info(`Deleting a course comment with id ${id} by user ${req.user.id}`);
    res.send(true);
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
 *           default: 10
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
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
 *         schema:
 *           type: boolean
 *       - in: query
 *         name: courseId
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: List of comments
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
  validator.query("isActive").optional().toBoolean(),
  validator.query("courseId").optional().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { page, perPage, query, orderBy, orderType, isActive, courseId } = req.query;
    const data = await courseCommentService.listComment(page, perPage, query, orderBy, orderType, courseId, isActive);
    logger.info(`Fetching all course comments by admin`);
    res.send(data);
  }),
);

/**
 * @swagger
 * /courseComment/{courseId}:
 *   get:
 *     summary: Get active comments for a specific course (public)
 *     tags: [Course Comments]
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: List of active comments
 */
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
    const data = await courseCommentService.listComment(page, perPage, query, orderBy, orderType, courseId, true);
    logger.info(`Fetching active course comments for course ${courseId}`);
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
 *     requestBody:
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
 *       200:
 *         description: Update successful
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
    const { title, text } = req.body;
    await courseCommentService.updateComment(commentId, { title, text });
    logger.info(`Update Comment ${commentId} by admin ${req.user.id}`);
    res.send(true);
  }),
);

/**
 * @swagger
 * /courseComment/user/{commentId}:
 *   put:
 *     summary: Update a comment by its owner
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
 *     requestBody:
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
 *       200:
 *         description: Update successful
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
    const { title, text } = req.body;
    const userId = req.user.id;
    await courseCommentService.updateComment(commentId, { title, text }, userId);
    logger.info(`Update Comment ${commentId} by user ${userId}`);
    res.send(true);
  }),
);

/**
 * @swagger
 * /courseComment/{commentId}:
 *   patch:
 *     summary: Activate a comment (admin only)
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
 *     responses:
 *       200:
 *         description: Activation successful
 */
courseCommmentRouter.patch(
  "/:commentId",
  validAuth,
  authorizePermissions(["courseComment:update:any", "courseComment:activate"]),
  validator.param("commentId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { commentId } = req.params;
    await courseCommentService.acceptComment(commentId);
    logger.info(`Activating comment ${commentId} by admin ${req.user.id}`);
    res.send(true);
  }),
);

module.exports = { courseCommmentRouter };