const prisma = require("../../utils/client.util");

const addCourseSession = async (title, text, file) => {
  await prisma.course_session.create({ data: { text, title, file } });
};
const getCourseSessions = async () => {
  const data = await prisma.course_session.findMany();
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
