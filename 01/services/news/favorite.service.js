const prisma = require("../../utils/client.util");

const toggleFavoriteNews = async (news_id, user_id) => {
  const news = await prisma.news.findUnique({ where: { id: news_id } });
  if (!news) throw new Error("News not found");

  const existing = await prisma.news_favorite.findFirst({
    where: { news_id, user_id },
  });

  if (existing) {
    await prisma.news_favorite.delete({
      where: { id: existing.id },
    });

    return { message: "Removed from favorites" };
  }

  await prisma.news_favorite.create({
    data: { news_id, user_id },
  });

  return { message: "Added to favorites" };
};

const getUserFavorites = async (user_id) => {
  return prisma.news_favorite.findMany({
    where: { user_id },
    include: { news: true },
  });
};

module.exports = {
  toggleFavoriteNews,
  getUserFavorites,
};