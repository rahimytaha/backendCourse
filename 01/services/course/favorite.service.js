const prisma = require("../../utils/client.util");
const courseService = require("./index.service");

const addFavorite = async (userId, courseId) => {
  await courseService.detailCourse(courseId, true);
  const checkFavorite = await prisma.course_favorite.findFirst({
    where: { user_id: userId, course_id: courseId },
  });
  if (checkFavorite) {
    throw new Error("You have already added this course to your favorites");
  }
  await prisma.course_favorite.create({
    data: { user_id: userId, course_id: courseId },
  });
};

const deleteFavorite = async (favId, userId) => {
  const checkFavorite = await prisma.course_favorite.findFirst({
    where: { id: favId, user_id: userId },
  });
  if (!checkFavorite) throw new Error("Favorite record not found");
  await prisma.course_favorite.delete({ where: { id: favId } });
};

const getFavoriteList = async (userId) => {
  const data = await prisma.course_favorite.findMany({
    where: { user_id: userId },
    include: { course: true },
  });
  return data.map((el) => ({
    course_id: el.course_id,
    course_picture: el.course.picture,
    course_title: el.course.title,
    id: el.id,
  }));
};

const checkFavorite = async (userId, courseId) => {
  await courseService.detailCourse(courseId, true);
  const checkItem = await prisma.course_favorite.findFirst({
    where: { course_id: courseId, user_id: userId },
  });
  return !!checkItem;
};

module.exports = {
  addFavorite,
  deleteFavorite,
  getFavoriteList,
  checkFavorite,
};