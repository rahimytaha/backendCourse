const prisma = require("../../utils/client.util");

const createCourse = async (data, user_id) => {
  const typeExists = await prisma.course_type.findUnique({
    where: { id: data.type_id },
  });

  if (!typeExists) {
    throw new Error("Invalid course type");
  }

  const { type_id, ...restData } = data;

  const newCourse = await prisma.course.create({
    data: {
      ...restData,
      isActive: Boolean(data.isActive),
      type: { connect: { id: type_id } },
      teacher: { connect: { id: user_id } },
    },
  });
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
  const take = Number(perPage);

  const data = await prisma.course.findMany({
    where: {
      ...(minPrice || maxPrice
        ? {
            price: {
              ...(minPrice && { gte: minPrice }),
              ...(maxPrice && { lte: maxPrice }),
            },
          }
        : {}),
      ...(typeId && { type_id: typeId }),
      ...(typeof isActive === "boolean" && { isActive }),
      ...(query && {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { mini_description: { contains: query, mode: "insensitive" } },
        ],
      }),
    },
    skip,
    take,
    orderBy: { [orderBy]: orderType },
  });

  return data;
};

const detailCourse = async (id, isActive) => {
  const where = { id };
  if (typeof isActive === "boolean") where.isActive = isActive;
  const course = await prisma.course.findFirst({ where });
  if (!course) {
    throw new Error("course not found");
  }
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