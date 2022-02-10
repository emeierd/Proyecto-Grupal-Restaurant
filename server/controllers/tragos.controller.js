const { TragosModel } = require("../models/Tragos");

const createTrago = async (req, res) => {
  try {
    const { title, size, price } = req.body;
    await TragosModel.create({
      title: title,
      size: size,
      price: price,
    }).then((newTrago) =>
      res.json({ msj: "Trago creado con exito", newTrago })
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

const getTragos = async (req, res) => {
  try {
    const tragos = await TragosModel.find({});
    res.json(tragos);
  } catch (err) {
    res.status(500).json({ msj: "Internal server error" });
  }
};

module.exports = {
  getTragos,
  createTrago,
};
