const { recipeModel } = require("../models/recipeModel")
const { shelfModel } = require("../models/shelfModel")
const { ingredientModel } = require("../models/ingredientModel")
const ingredientController = require("../controllers/ingredientController");

//Basic CRUD APIs
async function listAll (req, res) {  //Get all recipes
    try {
        const data = await recipeModel.find().exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function listRecipe (req, res) { //Get a recipe
    try {
        const data = await recipeModel.findById(req.params.id).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function createRecipe (req, res) { //Create a new recipe
    try {
        const newRecipe = new recipeModel(req.body);
        const data = await newRecipe.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateRecipe (req, res) { //Update a recipe
    try {   
        let recipeData = await recipeModel.findById(req.params.id).exec();
        recipeData.set(req.body);
        const data = await recipeData.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteRecipe (req, res) { //Delete a recipe
    try {
        const data = await recipeModel.deleteOne({'_id': req.params.id}).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

//Other APIs
async function listRecipeStatus (req, res) { //List the current status of a recipe based on the barshelf content
    try {
        const recipeIngredient = (await recipeModel.findById(req.params.id).exec()).ingredient;
        const ingredientIDFromShelf = (await shelfModel.findById(req.params.sid).exec()).content;
        let ingredientNameFromShelf = [];
        for (const ingredientID of ingredientIDFromShelf) {
            ingredientNameFromShelf.push((await ingredientController.listIngredientDetail(ingredientID)).name);
        }
        let availableIngredient = [];
        let unavailableIngredient = [];
        
        for (const ingredient of recipeIngredient) {
            if (ingredientNameFromShelf.includes(ingredient)) {
                const ingredientID = (await ingredientModel.find({"name": ingredient}).exec())[0]._id;
                availableIngredient.push({"id": ingredientID, "name":ingredient});
            } else {
                const ingredientID = (await ingredientModel.find({name: ingredient}).exec())[0]._id;
                unavailableIngredient.push({"id": ingredientID, "name": ingredient});
            }
        }
        res.json({ 
            "Available ingredient": availableIngredient, 
            "Unavailable ingredient" : unavailableIngredient
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    listAll,
    listRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    listRecipeStatus
}