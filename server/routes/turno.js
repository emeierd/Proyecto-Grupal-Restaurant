const router = require("express").Router();
const turnoController = require("../controllers/turno.controller");

router.post('/get', turnoController.get);
// router.post('/getDates', turnoController.getDates);

module.exports = router;