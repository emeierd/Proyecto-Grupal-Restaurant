const router = require("express").Router();
const controller = require("../controllers/tragos.controller");

router.get("/", controller.getTragos);
router.post("/new", controller.createTrago);

module.exports = router;
