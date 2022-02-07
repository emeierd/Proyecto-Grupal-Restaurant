const { model, Schema } = require("mongoose");

const ClienteSchema = new Schema({
    nombre: {
        type: String,
        minlength: [2, "The name has to have at least 2 characters"],
        required: true,
    },
    apellido: {
        type: String,
        minlength: [2, "Lastname has to have at least 2 characters"],
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        },
        unique: true
    },
}, { timestamps: true });


const Cliente = model("cliente", ClienteSchema)

module.exports = { Cliente, ClienteSchema };