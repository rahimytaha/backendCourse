const prisma = require("../../utils/client.util");

const likeNews = async (news_id, user_id) => {
  const news = await prisma.news.findUnique({ where: { id: news_id } });
  if (!news) throw new Error("News not found");

  const existingLike = await prisma.news_like.findFirst({
    where: { news_id, user_id },
  });

  const existingDislike = await prisma.news_dislike.findFirst({
    where: { news_id, user_id },
  });

  if (existingLike) {
    await prisma.news_like.delete({ where: { id: existingLike.id } });
    return { message: "Like removed" };
  }

  if (existingDislike) {
    await prisma.news_dislike.delete({ where: { id: existingDislike.id } });
  }

  await prisma.news_like.create({
    data: { news_id, user_id },
  });

  return { message: "News liked" };
};

const dislikeNews = async (news_id, user_id) => {
  const news = await prisma.news.findUnique({ where: { id: news_id } });
  if (!news) throw new Error("News not found");

  const existingLike = await prisma.news_like.findFirst({
    where: { news_id, user_id },
  });

  const existingDislike = await prisma.news_dislike.findFirst({
    where: { news_id, user_id },
  });

  if (existingDislike) {
    await prisma.news_dislike.delete({ where: { id: existingDislike.id } });
    return { message: "Dislike removed" };
  }

  if (existingLike) {
    await prisma.news_like.delete({ where: { id: existingLike.id } });
  }

  await prisma.news_dislike.create({
    data: { news_id, user_id },
  });

  return { message: "News disliked" };
};

const statusNews = async (newsId, userId) => {
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

  const isLike = Array.isArray(news.news_likes) && news.news_likes.length > 0;
  const isDislike =
    Array.isArray(news.news_dislikes) && news.news_dislikes.length > 0;
  const isFavorite = Array.isArray(news.favorites) && news.favorites.length > 0;

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
