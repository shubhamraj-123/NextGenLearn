import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendMail = async ({ to, subject, text, html }) => {
  return transporter.sendMail({
    from: `"NextGen Learn" <${process.env.SMTP_USER}>`,
    to,
    subject,
    text,
    html,
  });
};
