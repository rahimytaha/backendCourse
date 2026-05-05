const prisma = require("../../utils/client.util");
const { deduct } = require("./wallet.service");

const buildItems = async (items) => {
  // items: [{ course_id? , package_id?, quantity? }]
  const enriched = [];
  for (const item of items) {
    if (item.course_id) {
      const course = await prisma.course.findUnique({
        where: { id: item.course_id },
      });
      if (!course) throw new Error(`Course ${item.course_id} not found.`);
      const unit_price =
        Number(course.price) * (1 - Number(course.discount) / 100);
      enriched.push({ course_id: item.course_id, unit_price, quantity: 1 });
    } else if (item.package_id) {
      const pkg = await prisma.course_package.findUnique({
        where: { id: item.package_id },
        include: { items: true },
      });
      if (!pkg) throw new Error(`Package ${item.package_id} not found.`);
      const unit_price = Number(pkg.price) * (1 - Number(pkg.discount) / 100);
      enriched.push({ package_id: item.package_id, unit_price, quantity: 1 });
    } else {
      throw new Error("Each item must have course_id or package_id.");
    }
  }
  return enriched;
};

const fulfillOrder = async (orderId) => {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: { items: { include: { package: { include: { items: true } } } } },
  });

  for (const item of order.items) {
    if (item.course_id) {
      await prisma.user_course.upsert({
        where: {
          user_id_course_id: {
            user_id: order.user_id,
            course_id: item.course_id,
          },
        },
        create: {
          user_id: order.user_id,
          course_id: item.course_id,
          order_id: orderId,
        },
        update: {},
      });
    }
    if (item.package_id && item.package) {
      for (const pkgItem of item.package.items) {
        await prisma.user_course.upsert({
          where: {
            user_id_course_id: {
              user_id: order.user_id,
              course_id: pkgItem.course_id,
            },
          },
          create: {
            user_id: order.user_id,
            course_id: pkgItem.course_id,
            order_id: orderId,
          },
          update: {},
        });
      }
    }
  }
};

const createOrder = async (userId, items, payment_method = "wallet") => {
  const enrichedItems = await buildItems(items);
  const total = enrichedItems.reduce(
    (sum, i) => sum + i.unit_price * i.quantity,
    0,
  );

  const order = await prisma.order.create({
    data: {
      user_id: userId,
      total,
      payment_method,
      status: "pending",
      items: { create: enrichedItems },
    },
    include: { items: true },
  });

  // auto-pay with wallet
  if (payment_method === "wallet") {
    await deduct(userId, total, order.id);
    await prisma.order.update({
      where: { id: order.id },
      data: { status: "paid" },
    });
    await prisma.invoice.create({
      data: {
        order_id: order.id,
        user_id: userId,
        amount: total,
        status: "paid",
        paid_at: new Date(),
      },
    });
    await fulfillOrder(order.id);
    return { ...order, status: "paid" };
  }

  // gateway: just return pending order, payment handled externally
  await prisma.invoice.create({
    data: {
      order_id: order.id,
      user_id: userId,
      amount: total,
      status: "unpaid",
    },
  });
  return order;
};

const confirmGatewayPayment = async (orderId, payment_ref) => {
  const order = await prisma.order.findUnique({ where: { id: orderId } });
  if (!order) throw new Error("Order not found.");
  if (order.status === "paid") throw new Error("Order already paid.");

  await prisma.order.update({
    where: { id: orderId },
    data: { status: "paid", payment_ref },
  });
  await prisma.invoice.update({
    where: { order_id: orderId },
    data: { status: "paid", paid_at: new Date() },
  });
  await fulfillOrder(orderId);
  return { success: true };
};

const getMyOrders = async (userId) => {
  return prisma.order.findMany({
    where: { user_id: userId },
    include: { items: { include: { course: true, package: true } } },
    orderBy: { created_at: "desc" },
  });
};

const getAllOrders = async () => {
  return prisma.order.findMany({
    include: { user: true, items: true },
    orderBy: { created_at: "desc" },
  });
};

module.exports = {
  createOrder,
  confirmGatewayPayment,
  getMyOrders,
  getAllOrders,
};
