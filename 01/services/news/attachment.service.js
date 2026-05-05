const prisma = require("../../utils/client.util");
const fs = require("fs");
const path = require("path");

const getNewsOrThrow = async (newsId) => {
  const news = await prisma.news.findUnique({ where: { id: newsId } });
  if (!news) throw new Error("news not found");
  return news;
};

const addAttachment = async (newsId, file) => {
  await getNewsOrThrow(newsId);
  return prisma.news_attachment.create({
    data: {
      news_id: newsId,
      filename: file.originalname,
      path: file.path,
      mimetype: file.mimetype,
      size: file.size,
    },
  });
};

const getAttachments = async (newsId) => {
  await getNewsOrThrow(newsId);
  return prisma.news_attachment.findMany({ where: { news_id: newsId } });
};

const deleteAttachment = async (id, userId, userRoles) => {
  const attachment = await prisma.news_attachment.findUnique({
    where: { id },
    include: { news: true },
  });
  if (!attachment) throw new Error("attachment not found");

  const isAdminOrOwner = userRoles.includes("admin") || userRoles.includes("owner");
  const isAuthor = attachment.news.author_id === userId;
  if (!isAdminOrOwner && !isAuthor) {
    throw new Error("you are not allowed to delete this attachment");
  }

  const filePath = path.resolve(attachment.path);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

  await prisma.news_attachment.delete({ where: { id } });
  return true;
};

module.exports = { addAttachment, getAttachments, deleteAttachment };