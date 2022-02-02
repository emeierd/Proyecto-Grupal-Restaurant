const router = require("express").Router();

router.use('/reserva', require('./reserva'));

module.exports = router;