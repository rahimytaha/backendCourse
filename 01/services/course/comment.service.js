const prisma = require("../../utils/client.util");
const courseService = require("./index.service");

const createComment = async (data, parentId, userId) => {
  await courseService.detailCourse(data.course_id);
  const newComment = await prisma.course_comment.create({
    data: { user_id: userId, parent_id: parentId ?? null, ...data },
  });
  return newComment;
};

const deleteComment = async (id) => {
  await detailComment(id);
  await prisma.course_comment.delete({ where: { id } });
};

const listComment = async (
  page = 0,
  perPage = 10,
  query,
  orderBy = "title",
  orderType = "desc",
  courseId,
  isActive,
) => {
  const skip = page * perPage;
  const take = Number(perPage);
  const data = await prisma.course_comment.findMany({
    where: {
      ...(query && {
        OR: [{ text: { contains: query } }, { title: { contains: query } }],
      }),
      ...(typeof isActive === "boolean" && { isActive }),
      ...(courseId && { course_id: courseId }),
    },
    skip,
    take,
    orderBy: { [orderBy]: orderType },
  });
  return data;
};

const updateComment = async (id, data, userId) => {
  await detailComment(id);
  const where = { id };
  if (userId) where.user_id = userId;
  await prisma.course_comment.update({ where: { id }, data });
};

const detailComment = async (id) => {
  const comment = await prisma.course_comment.findFirst({ where: { id } });
  if (!comment)
    throw new Error("comment not found");
  return comment;
};

const acceptComment = async (id) => {
  await detailComment(id);
  await prisma.course_comment.update({
    where: { id },
    data: { isActive: true },
  });
};

module.exports = {
  createComment,
  deleteComment,
  listComment,
  updateComment,
  detailComment,
  acceptComment,
};