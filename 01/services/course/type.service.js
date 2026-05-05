const prisma = require("../../utils/client.util");

const createType = async (title, file = undefined) => {
  const newType = await prisma.course_type.create({ data: { title, file } });
  return newType;
};

const allTypes = async () => {
  const data = await prisma.course_type.findMany();
  return data;
};

const deleteType = async (typeId) => {
  await detailType(typeId);
  await prisma.course_type.delete({ where: { id: typeId } });
};

const detailType = async (typeId) => {
  const item = await prisma.course_type.findFirst({ where: { id: typeId } });
  if (!item) {
    throw new Error("Type not found");
  }
  return item;
};

module.exports = { createType, allTypes, deleteType, detailType };