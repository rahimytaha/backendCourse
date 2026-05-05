const prisma = require("../../utils/client.util");

const getMyCourses = async (userId) => {
  return prisma.user_course.findMany({
    where: { user_id: userId },
    include: { course: { select: { id: true, title: true, picture: true } } },
  });
};

const hasAccess = async (userId, course_id) => {
  const record = await prisma.user_course.findUnique({
    where: { user_id_course_id: { user_id: userId, course_id } },
  });
  return !!record;
};

const markProgress = async (userId, course_id, session_id) => {
  const userCourse = await prisma.user_course.findUnique({
    where: { user_id_course_id: { user_id: userId, course_id } },
  });
  if (!userCourse) throw new Error("You don't have access to this course.");

  return prisma.course_progress.upsert({
    where: {
      user_course_id_session_id: { user_course_id: userCourse.id, session_id },
    },
    create: {
      user_course_id: userCourse.id,
      session_id,
      completed_at: new Date(),
    },
    update: { completed_at: new Date() },
  });
};

const getProgress = async (userId, course_id) => {
  const userCourse = await prisma.user_course.findUnique({
    where: { user_id_course_id: { user_id: userId, course_id } },
    include: {
      progress: { include: { session: { select: { id: true, title: true } } } },
    },
  });
  if (!userCourse) throw new Error("No access to this course.");
  return userCourse.progress;
};

module.exports = { getMyCourses, hasAccess, markProgress, getProgress };
