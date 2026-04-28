const prisma = require("../../utils/client.util");
const courseService = require("./index.service");
const createComment = async (data, parentId, userId) => {
  await courseService.detailCourse(data.courseId);
  const newComment = await prisma.course_comment.create({
    data: { user_id: userId, parent_id: parentId, ...data },
  });
  // notification to users
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
  const limit = (page + 1) * perPage;
  const data = await prisma.course_comment.findMany({
    where: {
      OR: [{ text: { contains: query } }, { title: { contains: query } }],
      isActive,
      course_id: courseId,
    },
    orderBy: { [orderBy]: orderType },
  });
  return data;
};
const updateComment = async (id, data, userId) => {
  await detailComment(id, true, userId);
  await prisma.course_comment.update({ where: { id, user_id: userId }, data });
};
const detailComment = async (id, isActive, userId) => {
  const comment = await prisma.course_comment.findFirst({
    where: { id, isActive, user_id: userId },
  });
  if (!comment)
    throw Error({
      message: "comment not found or it is not active",
      statusCode: 404,
    });
  return comment;
};
const acceptComment = async (id) => {
  await detailComment(id, false);
  await prisma.course_comment.update({
    where: { id },
    data: { isActive: true },
  });
  // send notification
};
module.exports = {
  createComment,
  deleteComment,
  listComment,
  updateComment,
  detailComment,
  acceptComment,
};
