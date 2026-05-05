const express = require("express");
const multer = require("multer");
const path = require("path");
const { param } = require("express-validator");
const { validAuth, authorizePermissions, toRoleNames } = require("../../utils/auth.util");
const catchAsync = require("../../utils/catchAsync.util");
const { errorResponseValidation } = require("../../utils/validation.util");
const { addAttachment, getAttachments, deleteAttachment } = require("../../services/news/attachment.service");
const logger = require("../../utils/logger");

const newsAttachmentRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads/news"),
  filename: (req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e6)}`;
    cb(null, `${unique}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|pdf|doc|docx|zip|mp4|mp3/;
    const ext = path.extname(file.originalname).toLowerCase().slice(1);
    if (allowed.test(ext)) return cb(null, true);
    cb(new Error("File type not allowed"));
  },
});

/**
 * @swagger
 * /news/attachments/{newsId}:
 *   post:
 *     summary: Upload an attachment to a news item
 *     tags: [News Attachments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: newsId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Attachment uploaded
 *       400:
 *         $ref: '#/components/responses/400Err'
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 */
newsAttachmentRouter.post(
  "/:newsId",
  validAuth,
  authorizePermissions(["news:update"]),
  param("newsId").isInt().toInt(),
  upload.single("file"),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    if (!req.file) throw new Error("No file uploaded");
    const data = await addAttachment(Number(req.params.newsId), req.file);
    logger.info(`Attachment added to news ${req.params.newsId} by user ${req.user.id}`);
    res.status(201).json({ status: 201, message: "Attachment uploaded", data });
  }),
);

/**
 * @swagger
 * /news/attachments/{newsId}:
 *   get:
 *     summary: Get all attachments for a news item
 *     tags: [News Attachments]
 *     parameters:
 *       - in: path
 *         name: newsId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of attachments
 */
newsAttachmentRouter.get(
  "/:newsId",
  param("newsId").isInt().toInt(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const data = await getAttachments(Number(req.params.newsId));
    res.status(200).json({ status: 200, message: "Attachments", data });
  }),
);

/**
 * @swagger
 * /news/attachments/{id}:
 *   delete:
 *     summary: Delete an attachment
 *     tags: [News Attachments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Deleted
 *       401:
 *         $ref: '#/components/responses/401Err'
 *       403:
 *         $ref: '#/components/responses/403Err'
 */
newsAttachmentRouter.delete(
  "/:id",
  validAuth,
  authorizePermissions(["news:update"]),
  param("id").isUUID(),
  catchAsync(async (req, res) => {
    errorResponseValidation(req, res);
    const userRoles = req.user.roleNames ?? [];
    await deleteAttachment(req.params.id, req.user.id, userRoles);
    logger.info(`Attachment ${req.params.id} deleted by user ${req.user.id}`);
    res.status(200).json({ status: 200, message: "Attachment deleted" });
  }),
);

module.exports = newsAttachmentRouter;