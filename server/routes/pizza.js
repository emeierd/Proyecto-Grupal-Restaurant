const router = require("express").Router();
const controller = require("../controllers/pizzas.controller");

router.post("/new", controller.createPizza);
router.get("/", controller.getPizzas);
router.get("/:id", controller.getOnePizza);
router.put("/update/:id", controller.updatePizza);
router.delete("/delete/:id", controller.deletePizza);

module.exports = router;
