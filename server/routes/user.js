const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.post('/create', userController.create);
router.delete('/remove', userController.remove);
router.patch('/edit', userController.edit);
router.post('/get', userController.get);
router.post('/login', userController.login);

module.exports = router;