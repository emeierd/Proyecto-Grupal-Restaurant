const router = require("express").Router();
const pedidoController = require("../controllers/pedido.controller");

router.post('/create', pedidoController.create);

module.exports = router;