const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.email",
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: "dawoodusman370@gmail.com",
      pass: process.env.APP_PASSWORD,
    },
  });
  module.exports = transporter;