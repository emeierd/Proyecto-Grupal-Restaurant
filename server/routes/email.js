const router = require("express").Router();
const emailController = require("../controllers/email.controller");

router.post('/sendEmail', emailController.sendEmail);

module.exports = router;