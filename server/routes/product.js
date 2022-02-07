const router = require("express").Router();
const controller = require("../controllers/products.controller");

router.post("/new", controller.createProduct);
router.get("/", controller.getProducts);
router.get("/:_id", controller.getOneProduct);
router.put("/update/:_id", controller.updateProduct);
router.delete("/delete/:_id", controller.deleteProduct);

module.exports = router;
