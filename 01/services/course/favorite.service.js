const prisma = require("../../utils/client.util");
const courseService = require("./index.service");
const addFavorite = async (userId, courseId) => {
  await courseService.detailCourse(courseId, true);
  const checkFavorite = await prisma.course_favorite.findFirst({
    where: { user_id: userId, course_id: courseId },
  });
  if (checkFavorite) {
    throw Error({
      message: "you have added this course to your favorite list",
      statusCode: 400,
    });
  }
  await prisma.course_favorite.create({
    data: { user_id: userId, course_id: courseId },
  });
};
const deleteFavorite = async (favId) => {
  const checkFavorite = await prisma.course_favorite.findUnique({
    where: { id: favId },
  });
  if (!checkFavorite)
    throw Error({ message: "could not found this favorite record" });
  await prisma.course_favorite.delete({ where: { id: favId } });
};
const getFavoriteList = async (userId) => {
  const data = await prisma.course_favorite.findMany({
    where: { user_id: userId },
    include: { course: true },
  });
  return data.map((el) => {
    return {
      course_id: el.course_id,
      course_picture: el.course.picture,
      course_title: el.course.title,
      id: el.id,
    };
  });
};
const checkFavorite = async (userId, courseId) => {
  await courseService.detailCourse(courseId, true);
  const checkItem = await prisma.course_favorite.findFirst({
    where: { course_id: courseId, user_id: true },
  });
  return checkItem && true;
};

module.exports = {
  addFavorite,
  deleteFavorite,
  getFavoriteList,
  checkFavorite,
};
