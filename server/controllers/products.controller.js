const { ProductsModel } = require("../models/Products");

const createProduct = async (req, res) => {
  try {
    const { title, description, stock, type, price } = req.body;
    await ProductsModel.create({
      title: title,
      description: description,
      stock: stock,
      type: type,
      price: price,
    }).then((product) => res.json(product));
  } catch (err) {
    console.error({ err });
    if (err.errors) {
      console.log(err.errors);
      return res.status(400).json({ msj: "Bad Request", errors: err.errors });
    }
    res.status(500).json({ msj: "Internal server error" });
  }
};

const getProducts = async (req, res) => {
  try {
    const pizzas = await ProductsModel.find({});
    res.json(pizzas);
  } catch (err) {
    res.status(500).json({ msj: "Internal server error" });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const id = req.params._id;
    const product = await ProductsModel.findById(id);
    if (!product) returnres.status(404).json({ msj: "Not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ msj: "Internal server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    await ProductsModel.findOneAndUpdate({ _id: req.params._id }, req.body, {
      new: true,
    })
      .then((updatedProduct) => res.json(updatedProduct))
      .catch((err) => res.json(err));
  } catch (err) {
    console.error({ err });
    if (err.errors) {
      console.log(err.errors);
      return res.status(400).json({ msj: "Bad Request", errors: err.errors });
    }
    res.status(500).json({ msj: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params._id;
    const product = await ProductsModel.findByIdAndDelete(id);
    if (product === null) return res.status(404).json({ msj: "Not found" });
    res.json({ msj: "Producto eliminado" });
  } catch (err) {
    console.error({ err });
    res.status(500).json({ msj: "Internal server error" });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
