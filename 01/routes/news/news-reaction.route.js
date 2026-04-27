const express = require("express");
const newsReactionRouter = express.Router();

const expressValidator = require("express-validator");
const catchAsync = require("../../utils/catchAsync.util");
const { validAuth, authorizePermissions } = require("../../utils/auth.util");
const logger = require("../../utils/logger");

const {
  likeNews,
  dislikeNews,
} = require("../../services/news/news-reaction.service");

/**
 * @swagger
 * /news/reaction/{id}/like:
 *   post:
 *     tags: ["News Reaction"]
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
 *     tags: ["News Reaction"]
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

newsReactionRouter.post(
  "/:id/like",
  validAuth,
  authorizePermissions("news:react"),
  expressValidator.param("id").isInt(),
  catchAsync(async (req, res) => {
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
  catchAsync(async (req, res) => {
    const result = await dislikeNews(Number(req.params.id), req.user.id);

    logger.info(`Dislike news ${req.params.id}`);

    res.status(200).json({
      status: 200,
      message: result.message,
    });
  }),
);

module.exports = newsReactionRouter;
