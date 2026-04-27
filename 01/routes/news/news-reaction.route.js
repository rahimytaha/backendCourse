const express = require("express");
const newsReactionRouter = express.Router();

const expressValidator = require("express-validator");
const { validAuth, authorizePermissions } = require("../../utils/auth.util");
const logger = require("../../utils/logger");

const {
  likeNews,
  dislikeNews,
  statusNews,
} = require("../../services/news/news-reaction.service");
const catchAsysnc = require("../../utils/catchAsync.util");

/**
 * @swagger
 * /news/reaction/{id}/like:
 *   post:
 *     tags: ["News"]
 *     summary: Like a news
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /news/reaction/{id}/dislike:
 *   post:
 *     tags: ["News"]
 *     summary: Dislike a news
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * paths:
 *   /news/reaction/{id}/status:
 *     get:
 *       tags: ["News"]
 *       summary: Get news status (isLike, isDislike, isFavorite)
 *       description: Get the status of a specific news article (whether it's liked, disliked, or favorited by the user).
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: The news ID to check the status for.
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: integer
 *                     example: 200
 *                   message:
 *                     type: string
 *                     example: "News status fetched successfully!"
 *                   data:
 *                     type: object
 *                     properties:
 *                       isLike:
 *                         type: boolean
 *                         example: true
 *                       isDislike:
 *                         type: boolean
 *                         example: false
 *                       isFavorite:
 *                         type: boolean
 *                         example: true
 */

newsReactionRouter.post(
  "/:id/like",
  validAuth,
  authorizePermissions("news:react"),
  expressValidator.param("id").isInt(),
  catchAsysnc(async (req, res) => {
    const result = await likeNews(Number(req.params.id), req.user.id);

    logger.info(`Like news ${req.params.id}`);

    res.status(200).json({
      status: 200,
      message: result.message,
    });
  }),
);

newsReactionRouter.post(
  "/:id/dislike",
  validAuth,
  authorizePermissions("news:react"),
  expressValidator.param("id").isInt(),
  catchAsysnc(async (req, res) => {
    const result = await dislikeNews(Number(req.params.id), req.user.id);

    logger.info(`Dislike news ${req.params.id}`);

    res.status(200).json({
      status: 200,
      message: result.message,
    });
  }),
);

newsReactionRouter.get(
  "/:id/status",
  validAuth,
  expressValidator.param("id").isInt(),
  catchAsysnc(async (req, res) => {
    const result = await statusNews(Number(req.params.id), req.user.id);

    res.status(200).json({
      status: 200,
      message: "News status fetched successfully!",
      data: result,
    });
  }),
);

module.exports = newsReactionRouter;
