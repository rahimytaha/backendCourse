const prisma = require("../../utils/client.util");

const addRate = async (courseId, userId, rate) => {
  if (rate > 5 || rate < 0)
    throw new Error("Your rate should be between 0 and 5");

  const checkIsRate = await prisma.course_rate.findFirst({
    where: { course_id: courseId, user_id: userId },
  });
  if (checkIsRate) {
    throw new Error("You have already rated this course");
  }
  await prisma.course_rate.create({
    data: { user_id: userId, course_id: courseId, rate },
  });
};

const getRate = async (courseId) => {
  const rateList = await prisma.course_rate.findMany({
    where: { course_id: courseId },
  });
  if (!rateList.length) return { avgRate: 0, count: 0 };
  const values = rateList.map((e) => e.rate);
  const avgRate = values.reduce((a, b) => a + b, 0) / values.length;
  return { avgRate, count: values.length };
};

module.exports = { getRate, addRate };