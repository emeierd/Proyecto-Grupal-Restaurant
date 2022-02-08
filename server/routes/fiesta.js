const router = require("express").Router();
const fiestaController = require("../controllers/fiesta.controller");

router.post('/create', fiestaController.create);
router.get('/confirm', fiestaController.confirm);

module.exports = router;