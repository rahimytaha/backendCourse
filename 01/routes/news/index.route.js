const express = require("express");
const { errorResponseValidation } = require("../../utils/validation.util");
const catchAsysnc = require("../../utils/catchAsync.util");
const newsRouter = express.Router();
const expressValidator = require("express-validator");
const { authorizePermissions, validAuth } = require("../../utils/auth.util");
const {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
  publishNews,
} = require("../../services/news/index.service");
const logger = require('../../utils/logger');

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
 *                 example: "News created successfully"
 *               data:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   published:
 *                     type: boolean
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *
 *     200Res:
 *       description: Successful operation
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "List of news"
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     title:
 *                       type: string
 *                     content:
 *                       type: string
 *                     published:
 *                       type: boolean
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *
 *     201UpdateRes:
 *       description: Updated successfully
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "News updated successfully"
 *               data:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   published:
 *                     type: boolean
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */

/**
 * @swagger
 * paths:
 *   /news:
 *     post:
 *       tags: ["News"]
 *       summary: "Create news"
 *       description: "Create a new news item."
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *                 published:
 *                   type: boolean
 *               required: ["title", "content"]
 *       responses:
 *         201:
 *           description: "News created successfully"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "News created successfully"
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       title:
 *                         type: string
 *                       content:
 *                         type: string
 *                       published:
 *                         type: boolean
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *         400:
 *           $ref: "#/components/responses/400Err"
 *         401:
 *           $ref: "#/components/responses/401Err"
 *         403:
 *           $ref: "#/components/responses/403Err"
 */

/**
 * @swagger
 * paths:
 *   /news:
 *     get:
 *       tags: ["News"]
 *       summary: "Get all news"
 *       description: "Retrieve all news items with optional filters."
 *       parameters:
 *         - name: "title"
 *           in: "query"
 *           description: "Filter by title"
 *           required: false
 *           schema:
 *             type: string
 *         - name: "content"
 *           in: "query"
 *           description: "Filter by content"
 *           required: false
 *           schema:
 *             type: string
 *         - name: "author_id"
 *           in: "query"
 *           description: "Filter by author ID"
 *           required: false
 *           schema:
 *             type: integer
 *         - name: "published"
 *           in: "query"
 *           description: "Filter by published status"
 *           required: false
 *           schema:
 *             type: boolean
 *         - name: "order"
 *           in: "query"
 *           description: "Order by 'asc' or 'desc'"
 *           required: false
 *           schema:
 *             type: string
 *             enum: ["asc", "desc"]
 *       responses:
 *         200:
 *           description: "List of news"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "List of news"
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                         title:
 *                           type: string
 *                         content:
 *                           type: string
 *                         published:
 *                           type: boolean
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *         400:
 *           $ref: "#/components/responses/400Err"
 *         401:
 *           $ref: "#/components/responses/401Err"
 *         403:
 *           $ref: "#/components/responses/403Err"
 */

/**
 * @swagger
 * paths:
 *   /news/{id}:
 *     get:
 *       tags: ["News"]
 *       summary: "Get news by ID"
 *       description: "Retrieve news by ID."
 *       parameters:
 *         - name: "id"
 *           in: "path"
 *           required: true
 *           description: "News ID"
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: "Detail of news"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Detail of news"
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       title:
 *                         type: string
 *                       content:
 *                         type: string
 *                       published:
 *                         type: boolean
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *         404:
 *           $ref: "#/components/responses/404Err"
 */

/**
 * @swagger
 * paths:
 *   /news/{id}:
 *     put:
 *       tags: ["News"]
 *       summary: "Update news"
 *       description: "Update an existing news item."
 *       parameters:
 *         - name: "id"
 *           in: "path"
 *           required: true
 *           description: "News ID"
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
 *                 content:
 *                   type: string
 *                 published:
 *                   type: boolean
 *       responses:
 *         201:
 *           description: "News updated successfully"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "News updated successfully"
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       title:
 *                         type: string
 *                       content:
 *                         type: string
 *                       published:
 *                         type: boolean
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *         400:
 *           $ref: "#/components/responses/400Err"
 *         401:
 *           $ref: "#/components/responses/401Err"
 *         403:
 *           $ref: "#/components/responses/403Err"
 */

/**
 * @swagger
 * paths:
 *   /news/{id}:
 *     delete:
 *       tags: ["News"]
 *       summary: "Delete news"
 *       description: "Delete a news item by ID."
 *       parameters:
 *         - name: "id"
 *           in: "path"
 *           required: true
 *           description: "News ID"
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: "News deleted successfully"
 *         400:
 *           $ref: "#/components/responses/400Err"
 *         401:
 *           $ref: "#/components/responses/401Err"
 *         403:
 *           $ref: "#/components/responses/403Err"
 */

/**
 * @swagger
 *   /news/publish/{id}:
 *     put:
 *       tags: ["News"]
 *       summary: "Publish or Unpublish news"
 *       description: "Set the published status of a news item."
 *       parameters:
 *         - name: "id"
 *           in: "path"
 *           required: true
 *           description: "News ID"
 *           schema:
 *             type: integer
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 published:
 *                   type: boolean
 *       responses:
 *         201:
 *           $ref: "#/components/responses/201UpdateRes"
 *         400:
 *           $ref: "#/components/responses/400Err"
 *         401:
 *           $ref: "#/components/responses/401Err"
 *         403:
 *           $ref: "#/components/responses/403Err"
 */

newsRouter.post(
  "/",
  validAuth,
  authorizePermissions(["news:create"]),
  expressValidator.body("title").notEmpty().withMessage("title is required"),
  expressValidator
    .body("content")
    .notEmpty()
    .withMessage("content is required"),
  expressValidator.body("published").optional().isBoolean(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { title, content, published } = req.body;
    logger.info(`Creating news: ${title}, by user ${req.user.id}`); 
    const data = await createNews({ title, content, published }, req.user.id);
    res
      .status(201)
      .json({ status: 201, message: "News created successfully", data });
  }),
);

newsRouter.get(
  "/",
  expressValidator
    .query("title")
    .optional()
    .isString()
    .withMessage("title must be a string"),
  expressValidator
    .query("content")
    .optional()
    .isString()
    .withMessage("content must be a string"),
  expressValidator
    .query("author_id")
    .optional()
    .isInt()
    .withMessage("author_id must be an integer"),
  expressValidator
    .query("published")
    .optional()
    .isBoolean()
    .withMessage("published must be a boolean"),
  expressValidator
    .query("order")
    .optional()
    .isIn(["asc", "desc"])
    .withMessage("order must be either 'asc' or 'desc'"),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`Fetching news with filters: ${JSON.stringify(req.query)}`);
    const data = await getAllNews(
      req.query.title,
      req.query.content,
      req.query.author_id,
      req.query.published,
      req.query.order,
    );
    res.status(200).json({ status: 200, message: "List of news", data });
  }),
);

newsRouter.get(
  "/:id",
  expressValidator
    .param("id")
    .isInt()
    .toInt()
    .withMessage("id must be an integer"),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`Fetching news by id: ${req.params.id}`);
    const data = await getNewsById(req.params.id);
    res.status(200).json({ status: 200, message: "Detail of news", data });
  }),
);

newsRouter.put(
  "/:id",
  validAuth,
  authorizePermissions(["news:update"]),
  expressValidator
    .param("id")
    .isInt()
    .toInt()
    .withMessage("id must be an integer"),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`Updating news with id: ${req.params.id} by user ${req.user.id}`);
    const data = await updateNews(req.params.id, req.body, req.user.id);
    res
      .status(201)
      .json({ status: 201, message: "News updated successfully", data });
  }),
);

newsRouter.delete(
  "/:id",
  validAuth,
  authorizePermissions(["news:delete"]),
  expressValidator
    .param("id")
    .isInt()
    .toInt()
    .withMessage("id must be an integer"),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`Deleting news with id: ${req.params.id} by user ${req.user.id}`);
    await deleteNews(req.params.id, req.user.id);
    res.status(201).json({ status: 201, message: "News deleted successfully" });
  }),
);

newsRouter.put(
  "/publish/:id",
  validAuth,
  authorizePermissions(["news:update"]),
  expressValidator
    .param("id")
    .isInt()
    .toInt()
    .withMessage("id must be an integer"),
  expressValidator
    .body("published")
    .isBoolean()
    .withMessage("published must be a boolean"),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    logger.info(`Publishing news with id: ${req.params.id} by user ${req.user.id}`);
    const data = await publishNews(
      req.params.id,
      req.body.published,
      req.user.id,
    );
    res
      .status(201)
      .json({ status: 201, message: "News updated successfully", data });
  }),
);

module.exports = newsRouter;
