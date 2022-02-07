const router = require("express").Router();

router.use("/reserva", require("./reserva"));
router.use("/email", require("./email"));
router.use("/turno", require("./turno"));
router.use("/pizzas", require("./pizza"));
router.use("/products", require("./product"));

module.exports = router;
