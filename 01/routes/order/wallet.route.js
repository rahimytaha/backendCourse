const express = require("express");
const { body } = require("express-validator");
const { validAuth, authorizePermissions } = require("../../utils/auth.util");
const catchAsync = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const {
  getWallet,
  deposit,
  getTransactions,
} = require("../../services/order/wallet.service");

const walletRouter = express.Router();

/**
 * @swagger
 * /wallet:
 *   get:
 *     summary: Get my wallet balance
 *     tags: [Wallet]
 *     responses:
 *       200:
 *         description: wallet object
 */
walletRouter.get(
  "/",
  validAuth,
  catchAsync(async (req, res) => {
    const data = await getWallet(req.user.id);
    res.send(data);
  }),
);

/**
 * @swagger
 * /wallet/deposit:
 *   post:
 *     summary: Deposit into wallet
 *     tags: [Wallet]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 default: 100
 *     responses:
 *       200:
 *         description: updated wallet
 */
walletRouter.post(
  "/deposit",
  body("amount").isFloat({ min: 1 }),
  validAuth,
  authorizePermissions(["wallet:deposit"]),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await deposit(req.user.id, Number(req.body.amount));
    res.send(data);
  }),
);

/**
 * @swagger
 * /wallet/transactions:
 *   get:
 *     summary: Get my wallet transactions
 *     tags: [Wallet]
 *     responses:
 *       200:
 *         description: list of transactions
 */
walletRouter.get(
  "/transactions",
  validAuth,
  catchAsync(async (req, res) => {
    const data = await getTransactions(req.user.id);
    res.send(data);
  }),
);

module.exports = walletRouter;
