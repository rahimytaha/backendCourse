const prisma = require("../../utils/client.util");

const createCourse = async (data) => {
  const newCourse = await prisma.course.create({ data });
  return newCourse;
};
const allCourses = async (
  page = 0,
  perPage = 10,
  query,
  orderBy = "title",
  orderType = "desc",
  categoryList = [],
  isActive,
  minPrice,
  maxPrice,
  minRate,
  maxRate,
  typeId,
  categoryRequirment = 0,
) => {
  const skip = page * perPage;
  const limit = (page + 1) * perPage;
  const data = await prisma.course.findMany({
    where: {
      price: { gte: minPrice, lte: maxPrice },
      type_id: typeId,
      isActive,
      OR: [
        { title: { contains: query } },
        { mini_description: { contains: query } },
      ],
    },
    skip,
    take: limit,
    orderBy: { [orderBy]: orderType },
  });
};
const detailCourse = async (id,isActive) => {
  const course = await prisma.course.findFirst({ where: { id } });
  if (!course) new Error({ status: 404, message: "course not found" });
  return course;
};
const updateCourse = async (id, data) => {
  await detailCourse(id);
  const course = await prisma.course.update({ where: { id }, data });
  return course;
};
const deleteCourse = async (id) => {
  await detailCourse(id);
  await prisma.course.delete({ where: { id } });
};
module.exports = {
  deleteCourse,
  updateCourse,
  allCourses,
  createCourse,
  detailCourse,
};
