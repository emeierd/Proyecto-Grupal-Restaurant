const router = require("express").Router();

router.use("/reserva", require("./reserva"));
router.use("/email", require("./email"));
router.use("/turno", require("./turno"));
router.use("/pizzas", require("./pizza"));
router.use("/products", require("./product"));
router.use("/fiesta", require("./fiesta"));
router.use("/pedido", require("./pedido"));

module.exports = router;
