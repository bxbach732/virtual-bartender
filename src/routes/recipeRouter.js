const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

//Read all recipes
router.get("/", recipeController.listAll);
  
//Read a specific recipe
router.get("/:id", recipeController.listRecipe);

//Create a recipe
router.post("/", recipeController.createRecipe);

//Update a recipe
router.put("/:id", recipeController.updateRecipe);

//Delete a recipe
router.delete("/:id", recipeController.deleteRecipe);

//List the available and unavailable ingredients of a recipe based on the content of the shelf
router.get("/:id/:sid", recipeController.listRecipeStatus);

module.exports = router;