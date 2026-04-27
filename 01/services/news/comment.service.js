const { toRoleNames } = require("../../utils/auth.util");
const prisma = require("../../utils/client.util");

const createComment = async (news_id, user_id, data, parent_id) => {
  const news = await prisma.news.findUnique({ where: { id: news_id } });
  if (!news) throw Error("News not found");

  if (parent_id) {
    const comment = await prisma.news_comment.findUnique({
      where: { id: parent_id },
    });
    if (!comment) throw Error("Parent ID not found");

    return await prisma.news_comment.create({
      data: {
        ...data,
        user_id,
        news_id,
        parent_id,
      },
    });
  }

  return await prisma.news_comment.create({
    data: {
      ...data,
      user_id,
      news_id,
    },
  });
};

const getCommentsByNewsId = async (news_id) => {
  const news = await prisma.news.findUnique({
    where: { id: news_id },
  });
  if (!news) throw Error("News not found");

  const comments = await prisma.news_comment.findMany({
    where: { news_id },
    include: { user: true, replies: true },
  });

  return comments;
};

const getCommentById = async (id) => {
  const comment = await prisma.news_comment.findUnique({
    where: { id },
    include: { user: true, replies: true },
  });
  if (!comment) throw Error("Comment not found");

  return comment;
};

const updateComment = async (id, user_id, data) => {
  const comment = await prisma.news_comment.findUnique({ where: { id } });
  if (!comment) throw new Error("Comment not found");

  const user = await prisma.user.findUnique({ where: { id: user_id } });
  const userRoles = toRoleNames(user.userRoles);
  if (
    !userRoles.includes("admin") &&
    !userRoles.includes("owner") &&
    comment.user_id !== user_id
  )
    throw new Error("You don't have access for this action");

  return await prisma.news_comment.update({
    where: { id },
    data,
  });
};

const deleteComment = async (id, user_id) => {
  const comment = await prisma.news_comment.findUnique({ where: { id } });
  if (!comment) throw new Error("Comment not found");

  const user = await prisma.user.findUnique({ where: { id: user_id } });
  const userRoles = toRoleNames(user.userRoles);
  if (
    !userRoles.includes("admin") &&
    !userRoles.includes("owner") &&
    comment.user_id !== user_id
  )
    throw new Error("You don't have access for this action");

  await prisma.news_comment.delete({ where: { id } });
  return { message: "Comment deleted successfully" };
};

module.exports = {
  createComment,
  getCommentsByNewsId,
  getCommentById,
  updateComment,
  deleteComment,
};
