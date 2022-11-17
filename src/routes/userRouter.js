const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//Read all users
router.get("/", userController.listAll);

//Get the userid from the phone number or from the email address
router.get("/id", userController.getUserID);

//Read a specific user
router.get("/:id", userController.listUser);

//Create an user
router.post("/", userController.createUser);

//Update an user
router.put("/:id", userController.updateUser);

//Delete an user
router.delete("/:id", userController.deleteUser);

//Get the content of the bar shelf
router.get("/:id/shelf", userController.getShelf);

module.exports = router;