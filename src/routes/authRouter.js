const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.initiatePasswordless);

router.post("/authenticate", authController.authenticate);

router.get("/profile", authController.getProfile);

module.exports = router;