const express = require("express");
const router = express.Router();
const ingredientController = require("../controllers/ingredientController");

//Read all ingredients
router.get("/", ingredientController.listAll);
  
//Read a specific ingredient
router.get("/:id", ingredientController.listIngredient);

//Create an ingredient
router.post("/", ingredientController.createIngredient);

//Update an ingredient
router.put("/:id", ingredientController.updateIngredient);

//Delete an ingredient
router.delete("/:id", ingredientController.deleteIngredient);

module.exports = router;