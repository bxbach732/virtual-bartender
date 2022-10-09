const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//Read all users
router.get("/", userController.listAll);
  
//Read a specific user
router.get("/:id", userController.listUser);

//Create an user
router.post("/", userController.createUser);

//Update an user
router.put("/:id", userController.updateUser);

//Delete an user
router.delete("/:id", userController.deleteUser);

module.exports = router;