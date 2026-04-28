const express = require("express");
const courseFavoriteRoute = express.Router();
const courseFavoriteService = require("../../services/course/favorite.service");
const catchAsysnc = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const validator = await require("express-validator");
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
courseFavoriteRoute.get(
  "/",
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const userId = "xx";
    const data =await courseFavoriteService.getFavoriteList(userId)
    logger.info(`Fetching user course favorites list with user id ${userId}`);
    res.send(data);
  }),
);
courseFavoriteRoute.delete(
  "/:favoriteId",
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const userId = "xx";
    const favoriteId = req.params.favoriteId;
    await courseFavoriteService.deleteFavorite(favoriteId)
    logger.info(`Deleting course favorite by id ${favoriteId}`);
    res.send(true);
  }),
);

module.exports = { courseFavoriteRoute };
