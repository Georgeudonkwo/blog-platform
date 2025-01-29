import nodemailer from 'nodemailer';

/*const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
*/
export const sendPasswordResetEmail = async (user, resetToken) => {
  const resetUrl = `http://localhost:5000/api/auth/reset-password/${resetToken}`;
const {username,email,password}=user;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: username,
      pass: password,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset Request',
    text: `You requested a password reset. Click the link below to reset your password:\n\n${resetUrl}\n\nIf you did not request this, please ignore this email.`,
  };

  await transporter.sendMail(mailOptions);
};