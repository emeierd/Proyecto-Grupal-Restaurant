const { Turno } = require("../models/Turno");

const get = async (req, res) => {
    try {
        const { id } = req.body;
        const turno = await Turno.find({ uuid: id });
        res.status(200).json({ response: "OK", turnos: turno })
    } catch (err) {
        console.error(err);
        res.status(500).json({ response: "Error", message: err })
    }
}

// const getDates = async (req, res) => {
//     try {
//         var d1 = new Date("02/07/2022");
//         var d2 = new Date("04/01/2022");
//         var oneDay = 24 * 3600 * 1000;
//         for (var d = [], ms = d1 * 1, last = d2 * 1; ms < last; ms += oneDay) {
//             for (let i = 14; i <= 22; i += 2) {
//                 let date = new Date(ms)
//                 date.setHours(i, 0);
//                 const uuid = date.getFullYear().toString() + ("0" + (date.getMonth() + 1)).slice(-2).toString() +
//                     ("0" + date.getDate()).slice(-2).toString() + date.getHours().toString() + "00";

//                 turno = await Turno({ uuid: uuid, fecha: date });
//                 await turno.save();
//             }
//         }
//         res.status(200).json({ response: "OK", message: "Turnos creados" })
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ response: "Error", message: err })
//     }
// }

module.exports = { get };