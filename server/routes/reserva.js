const router = require("express").Router();
const reservaController = require("../controllers/reserva.controller");

router.post('/create', reservaController.create);
router.post('/check', reservaController.check);
router.get('/confirm/:id', reservaController.confirm);

module.exports = router;