const prisma = require("../../utils/client.util");

const getOrCreateWallet = async (userId) => {
  let wallet = await prisma.wallet.findUnique({ where: { user_id: userId } });
  if (!wallet) {
    wallet = await prisma.wallet.create({
      data: { user_id: userId, balance: 0 },
    });
  }
  return wallet;
};

const getWallet = async (userId) => {
  return getOrCreateWallet(userId);
};

const deposit = async (userId, amount) => {
  if (amount <= 0) throw new Error("Amount must be positive.");
  const wallet = await getOrCreateWallet(userId);
  const updated = await prisma.wallet.update({
    where: { id: wallet.id },
    data: { balance: { increment: amount } },
  });
  await prisma.wallet_transaction.create({
    data: { wallet_id: wallet.id, type: "deposit", amount },
  });
  return updated;
};

// internal — called by order service
const deduct = async (userId, amount, reference = null) => {
  const wallet = await getOrCreateWallet(userId);
  if (wallet.balance < amount) throw new Error("Insufficient wallet balance.");
  const updated = await prisma.wallet.update({
    where: { id: wallet.id },
    data: { balance: { decrement: amount } },
  });
  await prisma.wallet_transaction.create({
    data: { wallet_id: wallet.id, type: "payment", amount, reference },
  });
  return updated;
};

const refund = async (userId, amount, reference = null) => {
  const wallet = await getOrCreateWallet(userId);
  const updated = await prisma.wallet.update({
    where: { id: wallet.id },
    data: { balance: { increment: amount } },
  });
  await prisma.wallet_transaction.create({
    data: { wallet_id: wallet.id, type: "refund", amount, reference },
  });
  return updated;
};

const getTransactions = async (userId) => {
  const wallet = await getOrCreateWallet(userId);
  return prisma.wallet_transaction.findMany({
    where: { wallet_id: wallet.id },
    orderBy: { created_at: "desc" },
  });
};

module.exports = { getWallet, deposit, deduct, refund, getTransactions };
