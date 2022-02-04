const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "restomern@gmail.com", // generated ethereal user
        pass: "mgxdizjusrmiglii", // generated ethereal password
    },
});

transporter.verify().then(()=> {
    console.log("Ready to send email");
});

module.exports = { transporter };