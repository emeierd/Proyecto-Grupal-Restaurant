const { PizzasModel } = require("../models/Pizzas");
const { ProductsModel } = require("../models/Products");

const createPizza = async (req, res) => {
  try {
    const { title, size, mass, products, sauce, price, cheese } = req.body;
    await PizzasModel.create({
      title: title,
      size: size,
      mass: mass,
      products: products,
      sauce: sauce,
      price: price,
      cheese: cheese,
    }).then((newPizza) => res.json({ msj: "Pizza created", newPizza }));
  } catch (err) {
    console.error({ err });
    if (err.errors) {
      console.log(err.errors);
      return res.status(400).json({ msj: "Bad Request", errors: err.errors });
    }
    res.status(500).json({ msj: "Internal server error" });
  }
};

const getPizzas = async (req, res) => {
  try {
    const pizzas = await PizzasModel.find()
      .populate("products")
      .exec((err, product) => {
        if (err) {
          console.log(err);
          process.exit(-1);
        }
        res.json(product);
      });
  } catch (err) {
    res.status(500).json({ msj: "Internal server error" });
  }
};

const getOnePizza = async (req, res) => {
  try {
    const pizza = await PizzasModel.findOne({
      _id: req.params.id,
    });
    res.json(pizza);
  } catch (err) {
    res.status(500).json({ msj: "Internal server error" });
  }
};

const updatePizza = async (req, res) => {
  try {
    await PizzasModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    }).then((UpdatedPizza) =>
      res.json({ msj: "Product updated", UpdatedPizza })
    );
  } catch (err) {
    console.error({ err });
    if (err.errors) {
      console.log(err.errors);
      return res.status(400).json({ msj: "Bad Request", errors: err.errors });
    }
    res.status(500).json({ msj: "Internal server error" });
  }
};

const deletePizza = async (req, res) => {
  try {
    await PizzasModel.deleteOne({
      _id: req.params.id,
    }).then((deletedPizza) =>
      res.json({ msj: "Product deleted", deletedPizza })
    );
  } catch (err) {
    console.error({ err });
    res.status(500).json({ msj: "Internal server error" });
  }
};

module.exports = {
  createPizza,
  getPizzas,
  getOnePizza,
  updatePizza,
  deletePizza,
};
