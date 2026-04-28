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
courseCommmentRouter.post(
  "/",
  validator.body("title").notEmpty().escape().isString(),
  validator.body("text").notEmpty().escape().isString(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const userId = "1";
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
courseCommmentRouter.post(
  "/child/:parentId",
  validator.body("title").notEmpty().escape().isString(),
  validator.body("text").notEmpty().escape().isString(),
  validator.param("parentId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const userId = "1";
    const parentId = req.params.parentId;
    const newComment = await courseCommentService.createComment(
      req.body,
      userId,
      userId,
    );
    logger.info(
      `Adding a course comment replay with id ${newComment.id} by user with id ${userId}`,
    );
    res.send(newComment);
  }),
);
courseCommmentRouter.delete(
  "/:id",
  validator.param("id").notEmpty().escape().isUUID(),

  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { id } = req.params;
    const data = await courseCommentService.deleteComment(id);
    logger.info(
      `Deleting a course comment  with id ${id} by user with id ${"xx"}`,
    );
    res.send(data);
  }),
);
// get list for admin
courseCommmentRouter.get(
  "/",
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
// get list for user
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
//update by admin
courseCommmentRouter.update(
  "/admin/:commentId",
  validator.param("commentId").notEmpty().escape().isUUID(),
  validator.body("title").optional().notEmpty().escape().isString(),
  validator.body("text").optional().notEmpty().escape().isString(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { commentId } = req.params;
    const { title = undefined, text = undefined } = req.body;
    await courseCommentService.updateComment(commentId, { title, text });
    logger.info(`Update Comment With id ${commentId} by admin id ${"xx"}`);
    res.send(true);
  }),
);
//update by user
courseCommmentRouter.update(
  "/user/:commentId",
  validator.param("commentId").notEmpty().escape().isUUID(),
  validator.body("title").optional().notEmpty().escape().isString(),
  validator.body("text").optional().notEmpty().escape().isString(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { commentId } = req.params;
    const { title = undefined, text = undefined } = req.body;
    const userId = "xx";
    await courseCommentService.updateComment(
      commentId,
      { title, text },
      userId,
    );
    logger.info(`Update Comment With id ${commentId} by user id ${"xx"}`);
    res.send(true);
  }),
);
courseCommmentRouter.patch(
  "/:commentId",
  validator.param("commentId").notEmpty().escape().isUUID(),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const { commentId } = req.params;
    await courseCommentService.updateComment(commentId, { isActive: true });
    logger.info(`Activate a comment with id ${commentId} by user id ${"xx"}`);
    res.send(true);
  }),
);
module.exports = { courseCommmentRouter };
