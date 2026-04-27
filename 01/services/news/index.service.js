const { toRoleNames } = require("../../utils/auth.util");
const prisma = require("../../utils/client.util");

// creating news with data
const createNews = async (data, author_id) => {
  const news = await prisma.news.create({ data: { ...data, author_id } });
  return news;
};

// get all news with filters
const getAllNews = async (title, content, author_id, published, order) => {
  let where = {};

  // search as title
  if (title) where.title = { contains: title, mode: "insensitive" };
  // search as content
  if (content) where.content = { contains: content, mode: "insensitive" };
  // filter by published
  if (published !== undefined) {
    where.published = published === "true" || published === true;
  }

  // check author and implement filter system for it
  if (author_id !== undefined) {
    const author = await prisma.user.findUnique({
      where: { id: author_id },
    });

    if (!author) {
      throw new Error("author not found");
    }

    where.author_id = author_id;
  }

  // return list of news
  return prisma.news.findMany({
    where,
    // order filter
    orderBy: { createdAt: order === "asc" ? "asc" : "desc" },
  });
};

// get a news by id
const getNewsById = async (id) => {
  // check news
  const news = await prisma.news.findUnique({ where: { id } });
  if (!news) throw new Error("news not found");
  return news;
};

// update a news with data and id
const updateNews = async (id, data, userId) => {
  // check news
  const news = await prisma.news.findUnique({ where: { id } });
  if (!news) throw new Error("news not found");

  // check user and role of user
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

// delete a news by id
const deleteNews = async (id, userId) => {
  // check news
  const news = await prisma.news.findUnique({ where: { id } });
  if (!news) throw new Error("news not found");

  // check user and role of user
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

// publish or unpublish news
const publishNews = async (id, published, userId) => {
  // check news
  const news = await prisma.news.findUnique({ where: { id } });
  if (!news) throw new Error("news not found");

  // check user and role of user
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
