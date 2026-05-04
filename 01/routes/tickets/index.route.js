const express = require("express");
const ticketRouter = express.Router();

const {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicketStatus,
  assignTicket,
  deleteTicket,
  sendTicketMessage,
  getTicketMessages,
} = require("../../services/tickets/index.service");

const {
  validAuth,
  authorizePermissions,
} = require("../../utils/auth.util");

const catchAsync = require("../../utils/catchAsync.util");
const expressValidator = require("express-validator");
const logger = require("../../utils/logger");

/**
 * @swagger
 * tags:
 *   name: Tickets
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Ticket:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         status:
 *           type: string
 *         priority:
 *           type: string
 *         user_id:
 *           type: string
 *
 *     TicketMessage:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         ticket_id:
 *           type: string
 *         user_id:
 *           type: string
 *         message:
 *           type: string
 */

/**
 * CREATE TICKET
 * @swagger
 * /tickets:
 *   post:
 *     summary: Create support ticket
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, message]
 *             properties:
 *               title:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ticket created
 */

/**
 * GET ALL TICKETS
 * @swagger
 * /tickets:
 *   get:
 *     summary: Get all tickets
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tickets
 */

/**
 * GET SINGLE TICKET
 * @swagger
 * /tickets/{id}:
 *   get:
 *     summary: Get ticket by id
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Ticket data
 */

/**
 * UPDATE STATUS
 * @swagger
 * /tickets/{id}/status:
 *   patch:
 *     summary: Update ticket status
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [status]
 *             properties:
 *               status:
 *                 type: string
 *                 example: in_progress
 *     responses:
 *       200:
 *         description: Status updated
 */

/**
 * ASSIGN TICKET
 * @swagger
 * /tickets/{id}/assign:
 *   patch:
 *     summary: Assign ticket to support/admin
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Ticket assigned
 */

/**
 * DELETE TICKET
 * @swagger
 * /tickets/{id}:
 *   delete:
 *     summary: Delete ticket
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted successfully
 */

/**
 * GET MESSAGES
 * @swagger
 * /tickets/{id}/messages:
 *   get:
 *     summary: Get ticket chat messages
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Messages list
 */

/**
 * SEND MESSAGE
 * @swagger
 * /tickets/{id}/messages:
 *   post:
 *     summary: Send message in ticket
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [message]
 *             properties:
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Message sent
 */

ticketRouter.post(
  "/",
  validAuth,
  authorizePermissions(["tickets:create"]),
  expressValidator.body("title").notEmpty(),
  expressValidator.body("message").notEmpty(),
  catchAsync(async (req, res) => {
    logger.info(
      `User ${req.user.id} creating ticket with title: ${req.body.title}`,
    );

    const ticket = await createTicket(req.user.id, req.body);
    res.status(201).send(ticket);
  }),
);

ticketRouter.get(
  "/",
  validAuth,
  authorizePermissions(["tickets:read:any"]),
  catchAsync(async (req, res) => {
    logger.info(
      `Fetching tickets | page: ${req.query.page} | limit: ${req.query.limit}`,
    );

    const tickets = await getAllTickets(req.query);
    res.send(tickets);
  }),
);

ticketRouter.get(
  "/:id",
  validAuth,
  authorizePermissions(["tickets:read:any", "tickets:read:own"]),
  catchAsync(async (req, res) => {
    logger.info(
      `User ${req.user.id} fetching ticket ID: ${req.params.id}`,
    );

    const ticket = await getTicketById(req.params.id, req.user);
    res.send(ticket);
  }),
);

ticketRouter.patch(
  "/:id/status",
  validAuth,
  authorizePermissions(["tickets:update"]),
  expressValidator.body("status").notEmpty(),
  catchAsync(async (req, res) => {
    logger.info(
      `User ${req.user.id} updating ticket ${req.params.id} status to ${req.body.status}`,
    );

    const ticket = await updateTicketStatus(
      req.params.id,
      req.body.status,
    );
    res.send(ticket);
  }),
);

ticketRouter.patch(
  "/:id/assign",
  validAuth,
  authorizePermissions(["tickets:assign"]),
  catchAsync(async (req, res) => {
    logger.info(
      `User ${req.user.id} assigning ticket ${req.params.id} to self`,
    );

    const ticket = await assignTicket(req.params.id, req.user.id);
    res.send(ticket);
  }),
);

ticketRouter.delete(
  "/:id",
  validAuth,
  authorizePermissions(["tickets:delete"]),
  catchAsync(async (req, res) => {
    logger.info(
      `User ${req.user.id} deleting ticket ID: ${req.params.id}`,
    );

    const result = await deleteTicket(req.params.id);
    res.send(result);
  }),
);

ticketRouter.get(
  "/:id/messages",
  validAuth,
  authorizePermissions(["tickets:message:read"]),
  catchAsync(async (req, res) => {
    logger.info(
      `User ${req.user.id} fetching messages for ticket ${req.params.id}`,
    );

    const messages = await getTicketMessages(req.params.id);
    res.send(messages);
  }),
);

ticketRouter.post(
  "/:id/messages",
  validAuth,
  authorizePermissions(["tickets:message:create"]),
  expressValidator.body("message").notEmpty(),
  catchAsync(async (req, res) => {
    logger.info(
      `User ${req.user.id} sending message to ticket ${req.params.id}`,
    );

    const msg = await sendTicketMessage(
      req.params.id,
      req.user,
      req.body.message,
    );
    res.status(201).send(msg);
  }),
);

module.exports = ticketRouter;