const express = require("express");
const { body, param, query } = require("express-validator");
const { validAuth, authorizeRoles } = require("../../utils/auth.util");
const catchAsync = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const {
  createSchedule,
  getSchedules,
  enroll,
  cancelEnrollment,
  deleteSchedule,
} = require("../../services/order/schedule.service");

const scheduleRouter = express.Router();

/**
 * @swagger
 * /schedule:
 *   get:
 *     summary: List schedules (optionally filter by course_id)
 *     tags: [Schedule]
 *     parameters:
 *       - in: query
 *         name: course_id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: list of schedules
 */
scheduleRouter.get(
  "/",
  query("course_id").optional().isUUID(),
  validAuth,
  catchAsync(async (req, res) => {
    const data = await getSchedules(req.query.course_id);
    res.send(data);
  }),
);

/**
 * @swagger
 * /schedule:
 *   post:
 *     summary: Create a schedule (teacher/admin)
 *     tags: [Schedule]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [course_id, starts_at, ends_at]
 *             properties:
 *               course_id:
 *                 type: string
 *               title:
 *                 type: string
 *               starts_at:
 *                 type: string
 *                 format: date-time
 *               ends_at:
 *                 type: string
 *                 format: date-time
 *               capacity:
 *                 type: integer
 *               type:
 *                 type: string
 *                 default: live
 *               location:
 *                 type: string
 *     responses:
 *       201:
 *         description: schedule created
 */
scheduleRouter.post(
  "/",
  body("course_id").isUUID(),
  body("starts_at").isISO8601(),
  body("ends_at").isISO8601(),
  body("capacity").optional().isInt({ min: 1 }),
  validAuth,
  authorizeRoles(["teacher", "admin", "owner"]),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await createSchedule(req.body);
    res.status(201).send(data);
  }),
);

/**
 * @swagger
 * /schedule/{id}/enroll:
 *   post:
 *     summary: Enroll in a schedule
 *     tags: [Schedule]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       201:
 *         description: enrolled
 */
scheduleRouter.post(
  "/:id/enroll",
  param("id").isUUID(),
  validAuth,
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await enroll(req.user.id, req.params.id);
    res.status(201).send(data);
  }),
);

/**
 * @swagger
 * /schedule/{id}/enroll:
 *   delete:
 *     summary: Cancel enrollment
 *     tags: [Schedule]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: cancelled
 */
scheduleRouter.delete(
  "/:id/enroll",
  param("id").isUUID(),
  validAuth,
  catchAsync(async (req, res) => {
    const data = await cancelEnrollment(req.user.id, req.params.id);
    res.send(data);
  }),
);

scheduleRouter.delete(
  "/:id",
  param("id").isUUID(),
  validAuth,
  authorizeRoles(["teacher", "admin", "owner"]),
  catchAsync(async (req, res) => {
    await deleteSchedule(req.params.id);
    res.send({ success: true });
  }),
);

module.exports = scheduleRouter;
