const crypto = require("crypto");
const prisma = require("../../utils/client.util");
const { sendEmail } = require("../../utils/sendEmail");
const { createNotification } = require("../notification/notification.service");

const generateOTP = () => crypto.randomInt(100000, 999999).toString();

const OTP_TTL_MINUTES = 10;

const otpExpiresAt = () => new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000);

const saveOTP = async (userId, otp) => {
  await prisma.two_factor_auth.upsert({
    where: { user_id: userId },
    create: {
      user_id: userId,
      otp,
      otp_expires_at: otpExpiresAt(),
      is_enabled: false,
    },
    update: {
      otp,
      otp_expires_at: otpExpiresAt(),
    },
  });
};

const verifyOTP = async (userId, otp) => {
  const record = await prisma.two_factor_auth.findUnique({
    where: { user_id: userId },
  });

  if (!record || !record.otp) return false;
  if (record.otp_expires_at < new Date()) return false;
  if (record.otp !== otp) return false;

  // Clear the OTP so it can't be reused
  await prisma.two_factor_auth.update({
    where: { user_id: userId },
    data: { otp: null, otp_expires_at: null },
  });

  return true;
};

const sendOTPEmail = async (email, otp) => {
  await sendEmail({
    to: email,
    subject: "Your login verification code",
    htmlContent: `
      <h2>Verification Code</h2>
      <p>Use this code to complete your login. It expires in ${OTP_TTL_MINUTES} minutes.</p>
      <h1 style="letter-spacing: 8px;">${otp}</h1>
      <p>If you did not request this, you can ignore this email.</p>
    `,
  });
};

const requestEnable2FA = async (userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error("User not found.");

  const record = await prisma.two_factor_auth.findUnique({
    where: { user_id: userId },
  });
  if (record?.is_enabled) throw new Error("2FA is already enabled.");

  const otp = generateOTP();
  await saveOTP(userId, otp);
  await sendOTPEmail(user.email, otp);

  return {
    message: `A verification code has been sent to ${user.email}. Enter it to activate 2FA.`,
  };
};

const confirmEnable2FA = async (userId, otp) => {
  const valid = await verifyOTP(userId, otp);
  if (!valid) throw new Error("Invalid or expired code. Please try again.");

  await prisma.two_factor_auth.update({
    where: { user_id: userId },
    data: { is_enabled: true },
  });

  await createNotification({
    userId,
    title: "2FA Enabled",
    message: "Two-factor authentication has been enabled on your account.",
  });

  return { message: "2FA has been enabled successfully." };
};

const requestDisable2FA = async (userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error("User not found.");

  const record = await prisma.two_factor_auth.findUnique({
    where: { user_id: userId },
  });
  if (!record?.is_enabled) throw new Error("2FA is not enabled.");

  const otp = generateOTP();
  await saveOTP(userId, otp);
  await sendOTPEmail(user.email, otp);

  return {
    message: `A verification code has been sent to ${user.email}. Enter it to disable 2FA.`,
  };
};

const confirmDisable2FA = async (userId, otp) => {
  const record = await prisma.two_factor_auth.findUnique({
    where: { user_id: userId },
  });
  if (!record?.is_enabled) throw new Error("2FA is not enabled.");

  const valid = await verifyOTP(userId, otp);
  if (!valid) throw new Error("Invalid or expired code. Please try again.");

  await prisma.two_factor_auth.delete({ where: { user_id: userId } });

  await createNotification({
    userId,
    title: "2FA Disabled",
    message: "Two-factor authentication has been disabled on your account.",
  });

  return { message: "2FA has been disabled." };
};

const sendLoginOTP = async (userId, email) => {
  const otp = generateOTP();
  await saveOTP(userId, otp);
  await sendOTPEmail(email, otp);

  return {
    requiresTwoFactor: true,
    userId, // client sends this back with the OTP
    message: `A verification code has been sent to your email.`,
  };
};

const verifyLoginOTP = async (
  userId,
  otp,
  buildAuthPayload,
  getUserWithRolesById,
) => {
  const record = await prisma.two_factor_auth.findUnique({
    where: { user_id: userId },
  });
  if (!record?.is_enabled)
    throw new Error("2FA is not enabled for this account.");

  const valid = await verifyOTP(userId, otp);
  if (!valid) throw new Error("Invalid or expired code. Please log in again.");

  const user = await getUserWithRolesById(userId);

  await createNotification({
    userId,
    title: "New Login",
    message: "You have successfully logged in with 2FA.",
  });

  return buildAuthPayload(user);
};

const linkAccount = async (userId, { provider, providerId, email }) => {
  if (!provider || !providerId)
    throw new Error("provider and providerId are required.");

  const existing = await prisma.user_account.findUnique({
    where: { provider_provider_id: { provider, provider_id: providerId } },
  });

  if (existing) {
    if (existing.user_id === userId)
      throw new Error("This account is already linked to your profile.");
    throw new Error("This provider account is already linked to another user.");
  }

  const linked = await prisma.user_account.create({
    data: {
      user_id: userId,
      provider,
      provider_id: providerId,
      email: email ?? null,
    },
  });

  await createNotification({
    userId,
    title: "Account Linked",
    message: `Your ${provider} account has been linked.`,
  });

  return linked;
};

const unlinkAccount = async (userId, provider) => {
  const account = await prisma.user_account.findFirst({
    where: { user_id: userId, provider },
  });
  if (!account) throw new Error(`No linked ${provider} account found.`);

  // Make sure the user still has a way to log in
  const user = await prisma.user.findUnique({ where: { id: userId } });
  const remainingAccounts = await prisma.user_account.count({
    where: { user_id: userId },
  });

  if (remainingAccounts <= 1 && !user?.password) {
    throw new Error(
      "Cannot unlink the only login method. Set a password first.",
    );
  }

  await prisma.user_account.delete({ where: { id: account.id } });

  await createNotification({
    userId,
    title: "Account Unlinked",
    message: `Your ${provider} account has been unlinked.`,
  });

  return { message: `${provider} account unlinked.` };
};

const listLinkedAccounts = async (userId) => {
  return prisma.user_account.findMany({
    where: { user_id: userId },
    select: { id: true, provider: true, email: true, created_at: true },
  });
};

const findUserByProvider = async (provider, providerId) => {
  const account = await prisma.user_account.findUnique({
    where: { provider_provider_id: { provider, provider_id: providerId } },
    include: { user: { include: { userRoles: { include: { role: true } } } } },
  });
  return account?.user ?? null;
};

module.exports = {
  requestEnable2FA,
  confirmEnable2FA,
  requestDisable2FA,
  confirmDisable2FA,
  sendLoginOTP,
  verifyLoginOTP,
  linkAccount,
  unlinkAccount,
  listLinkedAccounts,
  findUserByProvider,
};
