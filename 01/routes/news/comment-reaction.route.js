const express = require("express");
const commentReactionRouter = express.Router();

const expressValidator = require("express-validator");
const { validAuth, authorizePermissions } = require("../../utils/auth.util");
const logger = require("../../utils/logger");

const {
  likeComment,
  dislikeComment,
} = require("../../services/news/comment-reaction.service");
const catchAsysnc = require("../../utils/catchAsync.util");

/**
 * @swagger
 * /news/comments/reaction/{id}/like:
 *   post:
 *     tags: ["News Comment"]
 *     summary: Like a comment
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /news/comments/reaction/{id}/dislike:
 *   post:
 *     tags: ["News Comment"]
 *     summary: Dislike a comment
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */

commentReactionRouter.post(
  "/:id/like",
  validAuth,
  authorizePermissions("news:comments:react"),
  expressValidator.param("id").isString(),
  catchAsysnc(async (req, res) => {
    logger.info(`Like comment ${req.params.id}`);
    const result = await likeComment(req.params.id, req.user.id);

    res.status(200).json({
      status: 200,
      message: result.message,
    });
  }),
);

commentReactionRouter.post(
  "/:id/dislike",
  validAuth,
  authorizePermissions("news:comments:react"),
  expressValidator.param("id").isString(),
  catchAsysnc(async (req, res) => {
    logger.info(`Dislike comment ${req.params.id}`);
    const result = await dislikeComment(req.params.id, req.user.id);

    res.status(200).json({
      status: 200,
      message: result.message,
    });
  }),
);

module.exports = commentReactionRouter;
