const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAcc = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    tls: {
      rejectUnauthorized: false,
    },
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "avery.buckridge76@ethereal.email",
      pass: "N1mdJmUXuBjtSpNEPH",
    },
  });

  let info = await transporter.sendMail({
    from: '"MDBEE" <avery.buckridge76@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<h2>Building an email sender!!</h2>", // html body
  });

  res.send(info);
};

module.exports = sendEmail;
