const { toRoleNames } = require("../../utils/auth.util");
const prisma = require("../../utils/client.util");

const createNews = async (data, author_id) => {
  const news = await prisma.news.create({ data: { ...data, author_id } });
  return news;
};

const getAllNews = async (title, content, author_id, published, order) => {
  let where = {};

  if (title) where.title = { contains: title, mode: "insensitive" };
  if (content) where.content = { contains: content, mode: "insensitive" };

  if (published !== undefined) {
    where.published = published === "true" || published === true;
  }

  if (author_id !== undefined) {
    const author = await prisma.user.findUnique({
      where: { id: author_id },
    });

    if (!author) {
      throw new Error("author not found");
    }

    where.author_id = author_id;
  }

  return prisma.news.findMany({
    where,
    orderBy: { createdAt: order === "asc" ? "asc" : "desc" },
  });
};

const getNewsById = async (id) => {
  const news = await prisma.news.findUnique({ where: { id } });
  if (!news) throw new Error("news not found");
  return news;
};

const updateNews = async (id, data, userId) => {
  const news = await prisma.news.findUnique({ where: { id } });
  if (!news) throw new Error("news not found");

  const user = await prisma.user.findUnique({ where: { id: userId } });
  const userRoles = toRoleNames(user.userRoles)
  if (
    !userRoles.includes("admin") &&
    !userRoles.includes("owner") &&
    news.author_id !== userId
  ) {
    throw new Error("you are not allowed to update this news");
  }

  return prisma.news.update({ where: { id }, data });
};

const deleteNews = async (id, userId) => {
  const news = await prisma.news.findUnique({ where: { id } });
  if (!news) throw new Error("news not found");

  const user = await prisma.user.findUnique({ where: { id: userId } });
  const userRoles = toRoleNames(user.userRoles)
  if (
    !userRoles.includes("admin") &&
    !userRoles.includes("owner") &&
    news.author_id !== userId
  ) {
    throw new Error("you are not allowed to delete this news");
  }

  return prisma.news.delete({ where: { id } });
};

const publishNews = async (id, published, userId) => {
  const news = await prisma.news.findUnique({ where: { id } });
  if (!news) throw new Error("news not found");

  const user = await prisma.user.findUnique({ where: { id: userId } });
  const userRoles = toRoleNames(user.userRoles)
  if (
    !userRoles.includes("admin") &&
    !userRoles.includes("owner") &&
    news.author_id !== userId
  ) {
    throw new Error("you are not allowed to publish or unpublish this news");
  }

  return prisma.news.update({ where: { id }, data: { published: published } });
};

module.exports = {
  deleteNews,
  updateNews,
  getAllNews,
  getNewsById,
  createNews,
  publishNews,
};
