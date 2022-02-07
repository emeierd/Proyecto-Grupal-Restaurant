const router = require("express").Router();

router.use('/reserva', require('./reserva'));
router.use('/email', require('./email'));
router.use('/turno', require('./turno'));

module.exports = router;