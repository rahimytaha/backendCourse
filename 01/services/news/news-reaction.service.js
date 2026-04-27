const prisma = require("../../utils/client.util");

// like a news
const likeNews = async (news_id, user_id) => {
  // check news
  const news = await prisma.news.findUnique({ where: { id: news_id } });
  if (!news) throw new Error("News not found");

  // check if the news is liked already or not
  const existingLike = await prisma.news_like.findFirst({
    where: { news_id, user_id },
  });

  // check if the news is disliked already or not
  const existingDislike = await prisma.news_dislike.findFirst({
    where: { news_id, user_id },
  });

  // if the news is liked, delete the like
  if (existingLike) {
    await prisma.news_like.delete({ where: { id: existingLike.id } });
    return { message: "Like removed" };
  }

  // if the news is disliked, delete the dislike
  if (existingDislike) {
    await prisma.news_dislike.delete({ where: { id: existingDislike.id } });
  }

  // like the news
  await prisma.news_like.create({
    data: { news_id, user_id },
  });

  return { message: "News liked" };
};

// dislike a news
const dislikeNews = async (news_id, user_id) => {
  // check user
  const news = await prisma.news.findUnique({ where: { id: news_id } });
  if (!news) throw new Error("News not found");

  // check if the news is liked already or not
  const existingLike = await prisma.news_like.findFirst({
    where: { news_id, user_id },
  });

  // check if the news is disliked already or not
  const existingDislike = await prisma.news_dislike.findFirst({
    where: { news_id, user_id },
  });

  // if the news is disliked, delete the disliked
  if (existingDislike) {
    await prisma.news_dislike.delete({ where: { id: existingDislike.id } });
    return { message: "Dislike removed" };
  }

  // if the news is liked, delete the like
  if (existingLike) {
    await prisma.news_like.delete({ where: { id: existingLike.id } });
  }

  // dislike the news
  await prisma.news_dislike.create({
    data: { news_id, user_id },
  });

  return { message: "News disliked" };
};

// check status of a news
const statusNews = async (newsId, userId) => {
  // get news with likes, dislikes and favorites (of user)
  const news = await prisma.news.findUnique({
    where: { id: newsId },
    include: {
      news_likes: {
        where: { user_id: userId },
      },
      news_dislikes: {
        where: { user_id: userId },
      },
      favorites: {
        where: { user_id: userId },
      },
    },
  });

  // check if the news has liked, disliked or marked as favorite by user or not
  const isLike = Array.isArray(news.news_likes) && news.news_likes.length > 0;
  const isDislike =
    Array.isArray(news.news_dislikes) && news.news_dislikes.length > 0;
  const isFavorite = Array.isArray(news.favorites) && news.favorites.length > 0;

  // return status
  return {
    isLike,
    isDislike,
    isFavorite,
  };
};

module.exports = {
  likeNews,
  dislikeNews,
  statusNews,
};
