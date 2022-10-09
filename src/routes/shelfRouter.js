const express = require("express");
const router = express.Router();
const shelfController = require("../controllers/shelfController");

//Read all shelves
router.get("/", shelfController.listAll);
  
//Read a specific shelf
router.get("/:id", shelfController.listShelf);

//Create a shelf
router.post("/", shelfController.createShelf);

//Update a shelf
router.put("/:id", shelfController.updateShelf);

//Delete a shelf
router.delete("/:id", shelfController.deleteShelf);

module.exports = router;