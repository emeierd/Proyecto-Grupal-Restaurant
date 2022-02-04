const { transporter } = require("../config/nodemailerConnect");

const sendEmail = async (req, res) => {
    try {
        const { email } = req.body;
        await transporter.sendMail({
            from: '"Your reservation at Restomern" <restomern@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          });
        res.status(200).json({response: "Ok"});
    } catch (err) {
        console.error(err);
        res.status(500).json({response: "Error", error: err});
    }
};



module.exports = { sendEmail };