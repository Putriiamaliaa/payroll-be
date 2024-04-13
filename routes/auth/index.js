const router = require("express").Router();

const authController = require('../../controllers/auth')

// router.post('/registrasi', loginController.registrasi)
router.post('/login', authController.login)

module.exports = router;