const prisma = require("../../utils/client.util");

const likeComment = async (comment_id, user_id) => {
  const comment = await prisma.news_comment.findUnique({
    where: { id: comment_id },
  });
  if (!comment) throw new Error("Comment not found");

  const existingLike = await prisma.news_comment_like.findFirst({
    where: { comment_id, user_id },
  });

  const existingDislike = await prisma.news_comment_dislike.findFirst({
    where: { comment_id, user_id },
  });

  if (existingLike) {
    await prisma.news_comment_like.delete({ where: { id: existingLike.id } });
    return { message: "Like removed" };
  }

  if (existingDislike) {
    await prisma.news_comment_dislike.delete({
      where: { id: existingDislike.id },
    });
  }

  await prisma.news_comment_like.create({
    data: { comment_id, user_id },
  });

  return { message: "Comment liked" };
};

const dislikeComment = async (comment_id, user_id) => {
  const comment = await prisma.news_comment.findUnique({
    where: { id: comment_id },
  });
  if (!comment) throw new Error("Comment not found");

  const existingLike = await prisma.news_comment_like.findFirst({
    where: { comment_id, user_id },
  });

  const existingDislike = await prisma.news_comment_dislike.findFirst({
    where: { comment_id, user_id },
  });

  if (existingDislike) {
    await prisma.news_comment_dislike.delete({
      where: { id: existingDislike.id },
    });
    return { message: "Dislike removed" };
  }

  if (existingLike) {
    await prisma.news_comment_like.delete({ where: { id: existingLike.id } });
  }

  await prisma.news_comment_dislike.create({
    data: { comment_id, user_id },
  });

  return { message: "Comment disliked" };
};

const statusComment = async (commentId, userId) => {
  const comment = await prisma.news_comment.findUnique({
    where: { id: commentId },
    include: {
      likes: {
        where: { user_id: userId },
      },
      dislikes: {
        where: { user_id: userId },
      },
    },
  });

  return {
    isLike: comment.likes.length > 0,
    isDislike: comment.dislikes.length > 0,
  };
}

module.exports = {
  likeComment,
  dislikeComment,
  statusComment,
};
