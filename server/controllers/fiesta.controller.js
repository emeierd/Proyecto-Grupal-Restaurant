const { Fiesta } = require("../models/Fiesta");
const { Cliente } = require("../models/Cliente");
const { transporter } = require("../config/nodemailerConnect");

const create = async (req, res) => {
    try {
        const { fecha, personas, name, lastName, email } = req.body;
        if (fecha < new Date()) return res.status(500).json({ response: "Error", message: "Can't reserve past times" });

        let cliente = await Cliente.findOne({ email: email });
        if (!cliente) {
            cliente = await Cliente({ nombre: name, apellido: lastName, email: email });
            await cliente.save();
        }

        const fiesta = await Fiesta({
            fecha: fecha, confirmada: false, personas: personas, cliente: email });

        await fiesta.save();
        console.log(fiesta);
     
        //enviar correo
        await transporter.sendMail({
            from: '"React Pizza House" <restomern@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Solicitud de reserva para fiesta", // Subject line
            text: `Haz hecho una solicitud de reserva para fiesta para el ${fecha}, te contactaremos a la brevedad` // plain text body
        });
        res.status(201).json({ response: "OK", fiesta: fiesta });
    } catch (err) {
        console.error(err);
        res.status(500).json({ response: "Error", message: err })
    }
};

const confirm = async (req, res) => {
    try {
        const fiesta = await Fiesta.findById(req.params.id);
        if (!fiesta) return res.status(404).json({ response: "Error", message: "Not found" })
        fiesta.confirmada = true;
        await fiesta.save();
        res.status(200).json({ response: "OK", message: "Reservation confirmed" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ response: "Error", message: err })
    }
};

module.exports = { create, confirm };