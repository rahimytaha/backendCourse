const express = require("express");
const courseRateRoute = express.Router();
const courseRateService = require("../../services/course/rate.service");
const catchAsysnc = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const validator = require("express-validator");
const logger = require("../../utils/logger");
const { validAuth, authorizePermissions } = require("../../utils/auth.util");

/**
 * @swagger
 * tags:
 *   name: Course Rates
 *   description: Course rating management
 */

/**
 * @swagger
 * /courseRate/{courseId}/{rate}:
 *   post:
 *     summary: Rate a course
 *     tags: [Course Rates]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Course ID to rate
 *       - in: path
 *         name: rate
 *         required: true
 *         schema:
 *           type: number
 *           minimum: 0
 *           maximum: 5
 *         description: Rating value (0-5)
 *     responses:
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 *       200:
 *         description: Rate added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *               example: true
 */
courseRateRoute.post(
  "/:courseId/:rate",
  validAuth,
  authorizePermissions(["courseRate:create"]),
  validator.param("courseId").notEmpty().isUUID(),
  validator
    .param("rate")
    .notEmpty()
    .isFloat({ min: 0, max: 5 })
    .withMessage("Rate must be a number between 0 and 5"),
  catchAsysnc(async (req, res) => {
    errorResponseValidation(req, res);
    const courseId = req.params.courseId;
    const rate = parseFloat(req.params.rate);
    const userId = req.user.id;
    await courseRateService.addRate(courseId, userId, rate);
    logger.info(`Add Course Rate by user ${userId} for course ${courseId} with rate ${rate}`);
    res.send(true);
  }),
);

module.exports = { courseRateRoute };