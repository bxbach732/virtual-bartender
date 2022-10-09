const { recipeModel } = require("../models/recipeModel")

async function listAll (req, res) {
    try {
        const data = await recipeModel.find().exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function listRecipe (req, res) {
    try {
        const data = await recipeModel.findById(req.params.id).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function createRecipe (req, res) {
    try {
        const newRecipe = new recipeModel(req.body);
        const data = await newRecipe.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateRecipe (req, res) {
    try {   
        let recipeData = await recipeModel.findById(req.params.id).exec();
        recipeData.set(req.body);
        const data = await recipeData.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteRecipe (req, res) {
    try {
        const data = await recipeModel.deleteOne({'_id': req.params.id}).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    listAll,
    listRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
}