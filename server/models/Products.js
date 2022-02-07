const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProductsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
    },
    stock: {
      type: String,
      required: [true, "Stock is required"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
    },
    price: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProductsModel = model("products", ProductsSchema);

module.exports = { ProductsModel, ProductsSchema };
