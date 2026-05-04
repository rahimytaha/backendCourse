const prisma = require("../../utils/client.util");

const addCourseSession = async (title, text, file, courseId) => {
  await prisma.course_session.create({
    data: { text, title, file, course_id: courseId },
  });
};
const getCourseSessions = async (courseId) => {
  const data = await prisma.course_session.findMany({
    where: { course_id: courseId },
  });
  return data;
};
const deleteCourseSessions = async (id) => {
  await detailCourseSessions(id);
  await prisma.course_session.delete({ where: { id } });
};
const detailCourseSessions = async (id) => {
  const item = await prisma.course_session.findFirst({ where: { id } });
  if (!item) {
    throw Error({ message: "could not found course session", statusCode: 404 });
  }
  return item;
};

module.exports = { addCourseSession, getCourseSessions, deleteCourseSessions };
