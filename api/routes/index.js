var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
const config = require("../config");
const ObjectId = require("mongodb").ObjectID;

router.get("/appointments", (req, res, next) => {
  req.collection.find({})
    .toArray()
    .then(result => res.json(result))
    .catch(err => res.send(err));
});

router.post("/appointments", (req, res, next) => {
  const { appointmentDate, district, name, email, noterios } = req.body;
  if (!appointmentDate || !district || !name || !email || !noterios) {
    return res.status(400).json({
      message: "Appointment date, name, email and noterio are required"
    });
  }

  const payload = { appointmentDate, district, name, email, noterios };
  req.collection.insertOne(payload)
    .then(result => res.json(result.ops[0]))
    .catch(err => res.send(err));

  // MAİL SERVER
  const output = `
    <p>Appointment Created :)</p>
    <h3>Appointment Informations</h3>
    <ul>
      <li><strong>Date:</strong> ${req.body.appointmentDate}</li>
      <li><strong>District:</strong> ${req.body.district}</li>
      <li><strong>Name:</strong> ${req.body.name}</li>
      <li><strong>Email:</strong> ${req.body.email}</li>
      <li><strong>Noterio:</strong> ${req.body.noterios}</li>
    </ul>
  `;

  nodemailer.createTestAccount((err, config) => {
    if (err) {
      console.error("Failed to create a testing account");
      console.error(err);
      return process.exit(1);
    }
  });

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false,
    auth: {
      user: config.mailgunOm,
      pass: config.mailgunOmp
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const messageMail = {
    from: "\"NOTERIO\" <info@noterio.com>", // sender address
    to: `${req.body.email}`, // list of receivers
    subject: "Noterio Randevu Sistemi ✔", // Subject line
    text: "Deneme", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(messageMail, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(nodemailer.getTestMessageUrl(info));
    }
  });
  // MAİL SERVER BİTİŞ
});

router.delete("/appointments/:id", (req, res, next) => {
  const { id } = req.params;
  const _id = ObjectId(id);

  req.collection.deleteOne({ _id })
    .then(result => res.json(result))
    .catch(err => res.send(err));
});

module.exports = router;
