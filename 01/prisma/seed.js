const prisma = require("../utils/client.util");

async function main() {
  await prisma.role.upsert({
    where: { name: "owner" },
    update: {},
    create: { name: "owner" },
  });

  await prisma.role.upsert({
    where: { name: "teacher" },
    update: {},
    create: { name: "teacher" },
  });

  await prisma.role.upsert({
    where: { name: "student" },
    update: {},
    create: { name: "student" },
  });
}

main().finally(() => prisma.$disconnect());