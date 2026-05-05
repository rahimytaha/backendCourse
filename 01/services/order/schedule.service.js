const prisma = require("../../utils/client.util");

const createSchedule = async (data) => {
  const course = await prisma.course.findUnique({
    where: { id: data.course_id },
  });
  if (!course) throw new Error("Course not found.");
  return prisma.course_schedule.create({ data });
};

const getSchedules = async (course_id) => {
  const where = course_id ? { course_id } : {};
  return prisma.course_schedule.findMany({
    where,
    include: { course: { select: { id: true, title: true } } },
    orderBy: { starts_at: "asc" },
  });
};

const enroll = async (userId, schedule_id) => {
  const schedule = await prisma.course_schedule.findUnique({
    where: { id: schedule_id },
    include: { enrollments: true },
  });
  if (!schedule) throw new Error("Schedule not found.");
  if (schedule.capacity && schedule.enrollments.length >= schedule.capacity) {
    throw new Error("Schedule is full.");
  }
  return prisma.schedule_enrollment.create({
    data: { user_id: userId, schedule_id, status: "enrolled" },
  });
};

const cancelEnrollment = async (userId, schedule_id) => {
  const enrollment = await prisma.schedule_enrollment.findUnique({
    where: { user_id_schedule_id: { user_id: userId, schedule_id } },
  });
  if (!enrollment) throw new Error("Enrollment not found.");
  return prisma.schedule_enrollment.update({
    where: { user_id_schedule_id: { user_id: userId, schedule_id } },
    data: { status: "cancelled" },
  });
};

const deleteSchedule = async (id) => {
  await prisma.course_schedule.delete({ where: { id } });
  return { success: true };
};

module.exports = {
  createSchedule,
  getSchedules,
  enroll,
  cancelEnrollment,
  deleteSchedule,
};
