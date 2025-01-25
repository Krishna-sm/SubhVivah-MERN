const express = require("express")
const { AuthController } = require("../controllers")
const router = express.Router()

// POST: /api/v1/auth/register --- register a user :201

router.post("/register",AuthController.registerUser)

// POST: /api/v1/auth/login --- login a user :200

router.post("/login",AuthController.loginUser)


module.exports = router