const prisma = require("../../utils/client.util");

// toggle favorite (news)
const toggleFavoriteNews = async (news_id, user_id) => {
  // check news
  const news = await prisma.news.findUnique({ where: { id: news_id } });
  if (!news) throw new Error("News not found");

  // check exisitng favortie (if the user marked this news as his favorites or not)
  const existing = await prisma.news_favorite.findFirst({
    where: { news_id, user_id },
  });

  // if it has marked as users favorites: delete the mark
  if (existing) {
    await prisma.news_favorite.delete({
      where: { id: existing.id },
    });

    return { message: "Removed from favorites" };
  }

  // if it hasn't marked as users favorites: mark as favorite
  await prisma.news_favorite.create({
    data: { news_id, user_id },
  });

  return { message: "Added to favorites" };
};

// get favorites list
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