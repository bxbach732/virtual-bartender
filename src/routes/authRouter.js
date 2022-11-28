const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

//Routing for the /auth endpoints

//Request Auth0 to send the OTP code
router.post("/login", authController.initiatePasswordless);

//Authenticate the user given that OTP code
router.post("/authenticate", authController.authenticate);

//Get the user profile
router.get("/profile", authController.getProfile);

module.exports = router;