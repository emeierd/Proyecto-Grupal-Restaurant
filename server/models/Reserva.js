const { model, Schema } = require("mongoose");

const ReservaSchema = new Schema({
    fecha: {
        type: Date,
        required: true,
    },
    confirmada: {
        type: Boolean,
        required: true,
        default: false
    },
    personas: {
        type: Number,
        required: true,
        min: 2
    },
    mesa: {
        type: Number,
        required: true,
        default: undefined
    },
    cliente: {
        type: String,
        required: true,
        default: undefined
    },
    turno_uuid: {
        type: Number,
        required: true
    }
}, { timestamps: true });


const Reserva = model("reserva", ReservaSchema)

module.exports = { Reserva, ReservaSchema };