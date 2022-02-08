const { model, Schema } = require("mongoose");

const FiestaSchema = new Schema({
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
        min: 10
    },
    cliente: {
        type: String,
        required: true,
        default: undefined
    },
}, { timestamps: true });


const Fiesta = model("fiesta", FiestaSchema);

module.exports = { Fiesta, FiestaSchema };