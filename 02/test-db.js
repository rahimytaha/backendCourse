const prisma = require("./utils/client.util");

async function testConnection() {
  try {
    // تست اتصال با یک query ساده
    await prisma.$connect();
    console.log("✅ اتصال به دیتابیس موفقیت‌آمیز بود");
    
    // تست read
    const users = await prisma.user.findMany();
    console.log(`📊 تعداد کاربران: ${users.length}`);
    
  } catch (error) {
    console.error("❌ خطا در اتصال به دیتابیس:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();