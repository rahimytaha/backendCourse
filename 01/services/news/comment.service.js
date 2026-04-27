const { toRoleNames } = require("../../utils/auth.util");
const prisma = require("../../utils/client.util");

// create a comment for news
const createComment = async (news_id, user_id, data, parent_id) => {
  // check news
  const news = await prisma.news.findUnique({ where: { id: news_id } });
  if (!news) throw Error("News not found");

  // check the parent_id is exist in body or not (reply)
  if (parent_id) {
    // check comment (with parent_id)
    const comment = await prisma.news_comment.findUnique({
      where: { id: parent_id },
    });
    if (!comment) throw Error("Parent ID not found");

    // create the comment (reply)
    return await prisma.news_comment.create({
      data: {
        ...data,
        user_id,
        news_id,
        parent_id,
      },
    });
  }

  // create the comment without parent_id (news)
  return await prisma.news_comment.create({
    data: {
      ...data,
      user_id,
      news_id,
    },
  });
};

// get comments of a news
const getCommentsByNewsId = async (news_id) => {
  // check news
  const news = await prisma.news.findUnique({
    where: { id: news_id },
  });
  if (!news) throw Error("News not found");

  // get comments
  const comments = await prisma.news_comment.findMany({
    where: { news_id },
    include: { user: true, replies: true },
  });

  return comments;
};

// get comment by id
const getCommentById = async (id) => {
  // check and return comment
  const comment = await prisma.news_comment.findUnique({
    where: { id },
    include: { user: true, replies: true },
  });
  if (!comment) throw Error("Comment not found");

  return comment;
};

// update comment
const updateComment = async (id, user_id, data) => {
  // check comment
  const comment = await prisma.news_comment.findUnique({ where: { id } });
  if (!comment) throw new Error("Comment not found");

  // check user and its roles for accessibility
  const user = await prisma.user.findUnique({ where: { id: user_id } });
  const userRoles = toRoleNames(user.userRoles);
  if (
    !userRoles.includes("admin") &&
    !userRoles.includes("owner") &&
    comment.user_id !== user_id
  )
    throw new Error("You don't have access for this action");

    // update the comment
  return await prisma.news_comment.update({
    where: { id },
    data,
  });
};

// delete the comment
const deleteComment = async (id, user_id) => {
  // check comment
  const comment = await prisma.news_comment.findUnique({ where: { id } });
  if (!comment) throw new Error("Comment not found");

  // check user and its roles for accessibility
  const user = await prisma.user.findUnique({ where: { id: user_id } });
  const userRoles = toRoleNames(user.userRoles);
  if (
    !userRoles.includes("admin") &&
    !userRoles.includes("owner") &&
    comment.user_id !== user_id
  )
    throw new Error("You don't have access for this action");

    // delete the comment
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
