const express = require("express");
const { body, param } = require("express-validator");
const {
  validAuth,
  authorizePermissions,
  authorizeRoles,
} = require("../../utils/auth.util");
const catchAsync = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const {
  createOrder,
  confirmGatewayPayment,
  getMyOrders,
  getAllOrders,
} = require("../../services/order/index.service");

const orderRouter = express.Router();

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Place an order (wallet or gateway)
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     course_id:
 *                       type: string
 *                     package_id:
 *                       type: string
 *               payment_method:
 *                 type: string
 *                 default: wallet
 *     responses:
 *       201:
 *         description: order created
 */
orderRouter.post(
  "/",
  body("items").isArray({ min: 1 }),
  body("payment_method").optional().isIn(["wallet", "gateway"]),
  validAuth,
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const { items, payment_method } = req.body;
    const data = await createOrder(req.user.id, items, payment_method);
    res.status(201).send(data);
  }),
);

/**
 * @swagger
 * /orders/confirm/{id}:
 *   patch:
 *     summary: Confirm gateway payment (admin)
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               payment_ref:
 *                 type: string
 *     responses:
 *       200:
 *         description: confirmed
 */
orderRouter.patch(
  "/confirm/:id",
  param("id").isUUID(),
  validAuth,
  authorizeRoles(["admin", "owner"]),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await confirmGatewayPayment(
      req.params.id,
      req.body.payment_ref,
    );
    res.send(data);
  }),
);

/**
 * @swagger
 * /orders/me:
 *   get:
 *     summary: Get my orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: list of orders
 */
orderRouter.get(
  "/me",
  validAuth,
  catchAsync(async (req, res) => {
    const data = await getMyOrders(req.user.id);
    res.send(data);
  }),
);

/**
 * @swagger
 * /orders/all:
 *   get:
 *     summary: Get all orders (admin)
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: list of all orders
 */
orderRouter.get(
  "/all",
  validAuth,
  authorizeRoles(["admin", "owner"]),
  catchAsync(async (req, res) => {
    const data = await getAllOrders();
    res.send(data);
  }),
);

module.exports = orderRouter;
