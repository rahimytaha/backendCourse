const express = require("express");
const courseFavoriteRoute = express.Router();
const courseFavoriteService = require("../../services/course/favorite.service");
const catchAsysnc = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const validator = require("express-validator");
const logger = require("../../utils/logger");

/**
 * @swagger
 * tags:
 *   name: Course Favorites
 *   description: User course favorites management
 */

/**
 * @swagger
 * /courseFavorite/{courseId}:
 *   post:
 *     summary: Add a course to user's favorites
 *     tags: [Course Favorites]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Course ID to favorite
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Favorite added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *               example: true
 */
courseFavoriteRoute.post(
  "/:courseId",
  validator.param("courseId").notEmpty().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const courseId = req.params.courseId;
    const userId = "xx";
    await courseFavoriteService.addFavorite(userId, courseId);
    logger.info(`Add Course Favorite by user ${userId} for course ${courseId}`);
    res.send(true);
  }),
);

/**
 * @swagger
 * /courseFavorite:
 *   get:
 *     summary: Get user's favorite courses list
 *     tags: [Course Favorites]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       200:
 *         description: List of user's favorite courses
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
 *                   userId:
 *                     type: string
 *                   courseId:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 */
courseFavoriteRoute.get(
  "/",
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const userId = "xx";
    const data = await courseFavoriteService.getFavoriteList(userId);
    logger.info(`Fetching user course favorites list with user id ${userId}`);
    res.send(data);
  }),
);

/**
 * @swagger
 * /courseFavorite/{favoriteId}:
 *   delete:
 *     summary: Remove a course from user's favorites
 *     tags: [Course Favorites]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: favoriteId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Favorite record ID to delete
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Favorite removed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *               example: true
 */
courseFavoriteRoute.delete(
  "/:favoriteId",
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const userId = "xx";
    const favoriteId = req.params.favoriteId;
    await courseFavoriteService.deleteFavorite(favoriteId);
    logger.info(`Deleting course favorite by id ${favoriteId}`);
    res.send(true);
  }),
);

module.exports = { courseFavoriteRoute };