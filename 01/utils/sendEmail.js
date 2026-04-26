const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async ({ to, subject, htmlContent }) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const generateForgotPasswordEmail = (userName, resetUrl) => {
  return `
    <!DOCTYPE html>
    <html lang="fa">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }
            .email-container {
                background-color: #ffffff;
                border-radius: 5px;
                padding: 20px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                max-width: 600px;
                margin: 0 auto;
            }
            h2 {
                color: #333;
            }
            p {
                font-size: 16px;
                color: #555;
            }
            a {
                display: inline-block;
                margin-top: 20px;
                padding: 12px 20px;
                background-color: #007bff;
                color: white;
                text-decoration: none;
                border-radius: 4px;
                text-align: center;
            }
            a:hover {
                background-color: #0056b3;
            }
            .footer {
                font-size: 12px;
                color: #888;
                text-align: center;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <h2>Hi, ${userName}!</h2>
            <p>We recived your request for forget password operation.</p>
            <p>For adjust again your password, click below button:</p>
            <a href="${resetUrl}">Forget Password</a>
            <div class="footer">
                <p>Thanks, Tech Team.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

module.exports = {
    generateForgotPasswordEmail,
    sendEmail,
};