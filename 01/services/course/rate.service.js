const prisma = require("../../utils/client.util");
const courseService = require("./index.service");
const addRate = async (courseId, userId, rate) => {
  if (rate > 5 || rate < 0)
    throw Error({
      message: "your rate should be between 0 to 5.0",
      statusCode: 422,
    });
  const checkIsRate = await prisma.course_rate.findFirst({
    where: { course_id: courseId, user_id: userId },
  });
  if (checkIsRate) {
    throw new Error({
      message: "you have set a rate from past !",
      statusCode: 400,
    });
  }
  await prisma.course_rate.create({
    data: { user_id: userId, course_id: courseId, rate },
  });
};
const getRate = async (courseId) => {
  let rateList = await prisma.course_rate.findMany({
    where: { course_id: courseId },
  });
  rateList = rateList.map((e) => e.rate);
  const avgRate = rateList.reduce((a, b) => a + b) / rateList.length;
  return { avgRate, count: rateList.length };
};
module.exports = { getRate, addRate };
