const prisma = require("../../utils/client.util");
const courseService = require("./index.service");
const addCategory = async (title, file = undefined) => {
  await courseService.detailCourse(courseId);
  await prisma.category.create({ data: { title, file } });
};
const deleteCategory = async (categoryId) => {
  await detailCategory(categoryId);
  await prisma.category.delete({ where: { id: categoryId } });
};

const updateCategory = async (catId, title, file = undefined) => {
  await detailCategory(categoryId);
  await prisma.category.update({ where: { id: catId }, data: { title, file } });
};
const listCategory = async () => {
  const list = await prisma.category.findMany();
  return list;
};
const detailCategory = async (catId) => {
  const checkItem = await prisma.category.findUnique({ where: { id: catId } });
  if (!checkItem) {
    throw Error({ message: "Category Could Not Found", statusCode: 404 });
  }
  return checkItem;
};

const addCourseCategory = async (catId, courseId) => {
  await detailCategory(catId);
  await courseService.detailCourse(courseId);

  const checkExist = await prisma.course_category.findFirst({
    where: { category_id: catId, course_id: courseId },
  });
  if (checkExist) {
    throw Error({
      message: "This category has appended to selected course before ! ",
    });
  }
  await prisma.course_category.create({
    data: { category_id: catId, course_id: courseId },
  });
};
const deleteCourseCategory = async (courseCategoryId) => {
  const checkExist = await prisma.course_category.findFirst({
    where: { category_id: catId, course_id: courseId },
  });
  if (!checkExist) {
    throw Error({
      message: "This category has not append to selected course yet ! ",
    });
  }
  await prisma.course_category.delete({ where: { id: courseCategoryId } });
};

module.exports = {
  addCategory,
  deleteCategory,
  updateCategory,
  listCategory,
  addCourseCategory,
  deleteCourseCategory,
};
