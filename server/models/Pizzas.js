const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PizzasSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  size: {
    type: String,
    required: [true, "Size is required"],
  },
  mass: {
    type: String,
    required: [true, "Mass type is required"],
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "products",
    },
  ],
  sauce: {
    type: String,
    required: [true, "Sauce is required"],
  },
  price: {
    type: String,
    required: [true, "Price is required"],
  },
  cheese: {
    type: String,
    required: [true, "Cheese quantity is required"],
  },
});

const PizzasModel = model("pizzas", PizzasSchema);

module.exports = { PizzasModel, PizzasSchema };
