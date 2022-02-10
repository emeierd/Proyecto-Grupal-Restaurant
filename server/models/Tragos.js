const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TragosSchema = new Schema({
  title: {
    type: String,
    required: [true, "title es requerido"],
  },
  size: {
    type: String,
    required: [true, "size es requerido"],
  },
  price: {
    type: String,
    required: [true, "price es requerido"],
  },
});

const TragosModel = model("tragos", TragosSchema);

module.exports = { TragosModel, TragosSchema };
