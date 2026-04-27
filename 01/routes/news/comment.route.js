const express = require("express");
const { errorResponseValidation } = require("../../utils/validation.util");
const catchAsysnc = require("../../utils/catchAsync.util");
const newsRouter = express.Router();
const expressValidator = require("express-validator");
const { authorizePermissions, validAuth } = require("../../utils/auth.util");
const logger = require("../../utils/logger");
const {
  createComment,
  getCommentsByNewsId,
  getCommentById,
  updateComment,
  deleteComment,
} = require("../../services/news/comment.service");

/**
 * @swagger
 * components:
 *   responses:
 *     400Err:
 *       description: Invalid request data
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Invalid request data"
 *
 *     401Err:
 *       description: Unauthorized
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Unauthorized"
 *
 *     403Err:
 *       description: Forbidden
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Forbidden"
 *
 *     404Err:
 *       description: Not Found
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "News not found"
 *
 *     201Res:
 *       description: Created successfully
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Comment created successfully"
 *               data:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   user_id:
 *                     type: string
 *                   parent_id:
 *                     type: string
 *                   news_id:
 *                     type: integer
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *
 */

/**
 * @swagger
 * paths:
 *   /news/comments/{news_id}:
 *     post:
 *       tags: ["News Comment"]
 *       summary: "Create a comment"
 *       description: "Create a comment on a news article."
 *       parameters:
 *         - name: "news_id"
 *           in: "path"
 *           required: true
 *           description: "ID of the news article"
 *           schema:
 *             type: integer
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: "Great news!"
 *                 content:
 *                   type: string
 *                   example: "I really enjoyed reading this article."
 *                 parent_id:
 *                   type: string
 *                   example: "optional" # for replies to other comments
 *       responses:
 *         201:
 *           description: "Comment created successfully"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Comment created successfully"
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "b5f7f4a8-fb4e-4956-b12b-709db24591ed"
 *                       title:
 *                         type: string
 *                         example: "Great news!"
 *                       content:
 *                         type: string
 *                         example: "I really enjoyed reading this article."
 *                       parent_id:
 *                         type: string
 *                         example: "optional"
 *                       news_id:
 *                         type: integer
 *                         example: 1
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2023-10-28T15:30:00Z"
 */

newsRouter.post(
  "/:news_id",
  validAuth,
  authorizePermissions(["news:comment:create"]),
  expressValidator
    .param("news_id")
    .isInt()
    .toInt()
    .withMessage("news_id must be an integer"),
  expressValidator
    .body("title")
    .isString()
    .notEmpty()
    .withMessage("title is required"),
  expressValidator
    .body("content")
    .isString()
    .notEmpty()
    .withMessage("content is required"),
  expressValidator
    .body("parent_id")
    .isString()
    .optional()
    .withMessage("parent_id must be an integer"),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { title, content, parent_id } = req.body;
    logger.info(`Creating comment for news with news_id: ${req.params.news_id}`);
    const data = await createComment(
      req.params.news_id,
      req.user.id,
      { title, content },
      parent_id,
    );
    res
      .status(201)
      .send({ status: 201, message: "Comment created successfully", data });
  }),
);

/**
 * @swagger
 * paths:
 *   /news/comments/{news_id}:
 *     get:
 *       tags: ["News Comment"]
 *       summary: "Get all comments for a news"
 *       description: "Get all comments for a specific news article."
 *       parameters:
 *         - name: "news_id"
 *           in: "path"
 *           required: true
 *           description: "News ID to fetch comments for"
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: "List of comments"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "List of comments"
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                         title:
 *                           type: string
 *                         content:
 *                           type: string
 *                         parent_id:
 *                           type: string
 *                         news_id:
 *                           type: integer
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 */

newsRouter.get(
  "/:news_id",
  expressValidator
    .param("news_id")
    .isInt()
    .toInt()
    .withMessage("news_id must be an integer"),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { news_id } = req.params;
    logger.info(`Fetching comments for news with news_id: ${news_id}`);
    const comments = await getCommentsByNewsId(news_id);
    res.status(200).json({
      status: 200,
      message: "List of comments",
      data: comments,
    });
  }),
);

/**
 * @swagger
 * paths:
 *   /news/comments/one/{id}:
 *     get:
 *       tags: ["News Comment"]
 *       summary: "Get a comment by ID"
 *       description: "Get a specific comment by its ID."
 *       parameters:
 *         - name: "id"
 *           in: "path"
 *           required: true
 *           description: "Comment ID"
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: "Comment details"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Comment details"
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "b5f7f4a8-fb4e-4956-b12b-709db24591ed"
 *                       title:
 *                         type: string
 *                         example: "Great news!"
 *                       content:
 *                         type: string
 *                         example: "I really enjoyed reading this article."
 *                       parent_id:
 *                         type: string
 *                         example: "optional"
 *                       news_id:
 *                         type: integer
 *                         example: 1
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2023-10-28T15:30:00Z"
 */

newsRouter.get(
  "/one/:id",
  expressValidator
    .param("id")
    .isString()
    .withMessage("id must be a valid string"),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`Fetching comment with id: ${req.params.id}`);
    const comment = await getCommentById(req.params.id);
    res
      .status(200)
      .json({ status: 200, message: "Comment details", data: comment });
  }),
);

/**
 * @swagger
 * paths:
 *   /news/comments/{id}:
 *     put:
 *       tags: ["News Comment"]
 *       summary: "Update a comment"
 *       description: "Update a comment based on its ID."
 *       parameters:
 *         - name: "id"
 *           in: "path"
 *           required: true
 *           description: "Comment ID"
 *           schema:
 *             type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: "Updated comment!"
 *                 content:
 *                   type: string
 *                   example: "This article is very informative!"
 *       responses:
 *         200:
 *           description: "Comment updated successfully"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Comment updated successfully"
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "b5f7f4a8-fb4e-4956-b12b-709db24591ed"
 *                       title:
 *                         type: string
 *                         example: "Updated comment!"
 *                       content:
 *                         type: string
 *                         example: "This article is very informative!"
 *                       parent_id:
 *                         type: string
 *                         example: "optional"
 *                       news_id:
 *                         type: integer
 *                         example: 1
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2023-10-28T15:30:00Z"
 */

newsRouter.put(
  "/:id",
  validAuth,
  authorizePermissions(["news:comment:update"]),
  expressValidator.param("id").isString().withMessage("id must be valid"),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { title, content } = req.body;
    logger.info(`Updating comment with id: ${req.params.id}`);
    const updatedComment = await updateComment(req.params.id, req.user.id, {
      title,
      content,
    });
    res.status(200).json({
      status: 200,
      message: "Comment updated successfully",
      data: updatedComment,
    });
  }),
);

/**
 * @swagger
 * paths:
 *   /news/comments/{id}:
 *     delete:
 *       tags: ["News Comment"]
 *       summary: "Delete a comment"
 *       description: "Delete a comment based on its ID."
 *       parameters:
 *         - name: "id"
 *           in: "path"
 *           required: true
 *           description: "Comment ID"
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: "Comment deleted successfully"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Comment deleted successfully"
 */

newsRouter.delete(
  "/:id",
  validAuth,
  authorizePermissions(["news:comment:delete"]),
  expressValidator.param("id").isString().withMessage("id must be valid"),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`Deleting comment with id: ${req.params.id}`);
    await deleteComment(req.params.id, req.user.id);
    res
      .status(200)
      .json({ status: 200, message: "Comment deleted successfully" });
  }),
);

module.exports = newsRouter;
