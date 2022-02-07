const { model, Schema } = require("mongoose");
const { ReservaSchema } = require("./Reserva");

const TurnoSchema = new Schema({
    uuid: {
        type: Number,
        length: [12, "Lenght must be 12"],
        required: true,
        unique: [true, "Name is already registered"]
    },
    fecha: {
        type: Date,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    reservas: {
        type: [ReservaSchema],
        default: undefined
    }
}, { timestamps: true });


const Turno = model("turno", TurnoSchema)

module.exports = { Turno };