const express = require("express");
const router = express.Router();
const shelfController = require("../controllers/shelfController");

//Read all shelves
router.get("/", shelfController.listAll);
  
//Read a specific shelf using shelf id
router.get("/:id", shelfController.listShelf);

//Create a shelf
router.post("/", shelfController.createShelf);

//Update a shelf
router.put("/:id", shelfController.updateShelf);

//Delete a shelf
router.delete("/:id", shelfController.deleteShelf);

//Add an ingredient to the shelf
router.put("/:id/add/:iid", shelfController.addIngredient);

//Delete an ingredient from the shelf
router.put("/:id/delete/:iid", shelfController.deleteIngredient);

//Find possible recipes 
router.get("/:id/possible-recipe", shelfController.findPossibleRecipes);

module.exports = router;