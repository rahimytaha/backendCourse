const prisma = require("../../utils/client.util");

// like a comment
const likeComment = async (comment_id, user_id) => {
  // check comment
  const comment = await prisma.news_comment.findUnique({
    where: { id: comment_id },
  });
  if (!comment) throw new Error("Comment not found");

  // check if the comment is liked already or not
  const existingLike = await prisma.news_comment_like.findFirst({
    where: { comment_id, user_id },
  });

  // check if the comment is dislike already or not
  const existingDislike = await prisma.news_comment_dislike.findFirst({
    where: { comment_id, user_id },
  });

  // if the comment is liked, delete the like
  if (existingLike) {
    await prisma.news_comment_like.delete({ where: { id: existingLike.id } });
    return { message: "Like removed" };
  }


  // if the comment is dislike, delete the dislike
  if (existingDislike) {
    await prisma.news_comment_dislike.delete({
      where: { id: existingDislike.id },
    });
  }

  // like the comment
  await prisma.news_comment_like.create({
    data: { comment_id, user_id },
  });

  return { message: "Comment liked" };
};

// dislike a comment
const dislikeComment = async (comment_id, user_id) => {
  // check comment
  const comment = await prisma.news_comment.findUnique({
    where: { id: comment_id },
  });
  if (!comment) throw new Error("Comment not found");

  // check if the comment is liked already or not
  const existingLike = await prisma.news_comment_like.findFirst({
    where: { comment_id, user_id },
  });

  // check if the comment is dislike already or not
  const existingDislike = await prisma.news_comment_dislike.findFirst({
    where: { comment_id, user_id },
  });

  // if the comment is dislike, delete the dislike
  if (existingDislike) {
    await prisma.news_comment_dislike.delete({
      where: { id: existingDislike.id },
    });
    return { message: "Dislike removed" };
  }

  // if the comment is like, delete the like
  if (existingLike) {
    await prisma.news_comment_like.delete({ where: { id: existingLike.id } });
  }

  // dislike the comment
  await prisma.news_comment_dislike.create({
    data: { comment_id, user_id },
  });

  return { message: "Comment disliked" };
};

// check status of a comment
const statusComment = async (commentId, userId) => {
  // get comment with likes and dislikes (of user)
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

  // check if the comment has liked or disliked by user or not, and return it
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
