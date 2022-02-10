const { model, Schema } = require("mongoose");

const PedidoSchema = new Schema({
  fecha: {
    type: Date,
    required: [true, "Date is required"],
  },
  cliente: {
    type: String,
    required: [true, "Cliente is required"],
 },
  canal: {
    type: String,
    required: [true, "Canal type is required"],
  },
  productos: {
      ids: [String],
      nombres: [String],
      cantidades: [Number]
  },
  total: {
    type: Number,
    required: [true, "total is required"],
  },
  comuna: String,
  direccion: String,
});

const Pedido = model("pedido", PedidoSchema);

module.exports = { Pedido, PedidoSchema };