const express = require("express");
const { body, param } = require("express-validator");
const { validAuth } = require("../../utils/auth.util");
const catchAsync = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const {
  getMyCourses,
  markProgress,
  getProgress,
} = require("../../services/order/userCourse.service");

const userCoursesRouter = express.Router();

/**
 * @swagger
 * /my-courses:
 *   get:
 *     summary: Get my enrolled courses
 *     tags: [My Courses]
 *     responses:
 *       200:
 *         description: list of enrolled courses
 */
userCoursesRouter.get(
  "/",
  validAuth,
  catchAsync(async (req, res) => {
    const data = await getMyCourses(req.user.id);
    res.send(data);
  }),
);

/**
 * @swagger
 * /my-courses/{course_id}/progress:
 *   get:
 *     summary: Get progress for a course
 *     tags: [My Courses]
 *     parameters:
 *       - in: path
 *         name: course_id
 *         required: true
 *     responses:
 *       200:
 *         description: progress list
 */
userCoursesRouter.get(
  "/:course_id/progress",
  param("course_id").isUUID(),
  validAuth,
  catchAsync(async (req, res) => {
    const data = await getProgress(req.user.id, req.params.course_id);
    res.send(data);
  }),
);

/**
 * @swagger
 * /my-courses/{course_id}/progress:
 *   post:
 *     summary: Mark a session as completed
 *     tags: [My Courses]
 *     parameters:
 *       - in: path
 *         name: course_id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               session_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: progress marked
 */
userCoursesRouter.post(
  "/:course_id/progress",
  param("course_id").isUUID(),
  body("session_id").isUUID(),
  validAuth,
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await markProgress(
      req.user.id,
      req.params.course_id,
      req.body.session_id,
    );
    res.status(201).send(data);
  }),
);

module.exports = userCoursesRouter;
