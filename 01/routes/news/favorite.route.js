const express = require("express");
const newsFavoriteRouter = express.Router();

const expressValidator = require("express-validator");
const { validAuth, authorizePermissions } = require("../../utils/auth.util");
const logger = require("../../utils/logger");

const {
  toggleFavoriteNews,
  getUserFavorites,
} = require("../../services/news/favorite.service");
const catchAsysnc = require("../../utils/catchAsync.util");

/**
 * @swagger
 * /news/favorite/{id}:
 *   post:
 *     tags: ["News"]
 *     summary: Toggle favorite news
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
 * /news/favorite/all:
 *   get:
 *     tags: ["News"]
 *     summary: Get user favorite news
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 */

newsFavoriteRouter.post(
  "/:id",
  validAuth,
  authorizePermissions('news:favorite'),
  expressValidator.param("id").isInt(),
  catchAsysnc(async (req, res) => {
    const result = await toggleFavoriteNews(Number(req.params.id), req.user.id);

    logger.info(`Toggle favorite news ${req.params.id}`);

    res.status(200).json({
      status: 200,
      message: result.message,
    });
  }),
);

newsFavoriteRouter.get(
  "/all",
  validAuth,
  authorizePermissions('news:favorite'),
  catchAsysnc(async (req, res) => {
    const data = await getUserFavorites(req.user.id);

    res.status(200).json({
      status: 200,
      message: "Favorite news list",
      data,
    });
  }),
);

module.exports = newsFavoriteRouter;
