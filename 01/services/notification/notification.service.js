const prisma = require("../../utils/client.util");
const { sendEmail } = require("../../utils/sendEmail");

const createNotification = async ({
  userId,
  title,
  message,
  type = "INFO",
  sendEmailFlag = false,
  emailData = null,
}) => {
  // save in DB
  const notification = await prisma.notification.create({
    data: {
      user_id: userId,
      title,
      message,
      type,
    },
  });

  // async email (non-blocking)
  if (sendEmailFlag && emailData) {
    sendEmail(emailData).then((result) => {
      if (!result.success) {
        console.error("Failed to send email:", result.error);
      }
    });
  }

  return notification;
};

module.exports = {
  createNotification,
};
