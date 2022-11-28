const { ingredientModel } = require("../models/ingredientModel")

//Basic CRUD APIs
async function listAll (req, res) { //Get all the ingredients
    try {
        const data = await ingredientModel.find().exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function listIngredient (req, res) { //Get an ingredient
    try {
        const data = await ingredientModel.findById(req.params.id).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function createIngredient (req, res) { //Create a new ingredient
    try {
        const newIngredient = new ingredientModel(req.body);
        const data = await newIngredient.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateIngredient (req, res) { //Update an ingredient
    try {   
        let ingredientData = await ingredientModel.findById(req.params.id).exec();
        ingredientData.set(req.body);
        const data = await ingredientData.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteIngredient (req, res) { //Delete an ingredient
    try {
        const data = await ingredientModel.deleteOne({'_id': req.params.id}).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function listIngredientDetail (ingredientID) { //Helper API to find ingredient detail
    try {   
        const data = await ingredientModel.findById(ingredientID).exec();
        return data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    listAll,
    listIngredient,
    createIngredient,
    updateIngredient,
    deleteIngredient,
    listIngredientDetail
}