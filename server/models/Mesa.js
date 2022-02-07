const { model, Schema } = require("mongoose");

const MesaSchema = new Schema({
    numero: {
        type: Number,
        required: true,
        unique: [true, "Number is already registered"]
    },
    personas: {
        type: Number,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    disponible: {
        type: Boolean,
        required: true,
        default: true
    }
}, { timestamps: true });


const Mesa = model("mesa", MesaSchema)

module.exports = { Mesa, MesaSchema };