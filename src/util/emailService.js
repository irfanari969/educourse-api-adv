const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (options) => {
  try {
    const info = await transporter.sendMail({
      from: `"EduCourse Admin" <${process.env.EMAIL_USER}>`, 
      to: options.to,         
      subject: options.subject, 
      text: options.text,       
      html: options.html,      
    });

    console.log("Email terkirim, messageId:", info.messageId)
    
    console.log("Link pratinjau email:", nodemailer.getTestMessageUrl(info))
    return info

  } catch (error) {
    console.error("Error saat mengirim email:", error)
  }
}

module.exports = sendEmail