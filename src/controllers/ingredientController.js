const { ingredientModel } = require("../models/ingredientModel")

async function listAll (req, res) {
    try {
        const data = await ingredientModel.find().exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function listIngredient (req, res) {
    try {
        const data = await ingredientModel.findById(req.params.id).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function createIngredient (req, res) {
    try {
        const newIngredient = new ingredientModel(req.body);
        const data = await newIngredient.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateIngredient (req, res) {
    try {   
        let ingredientData = await ingredientModel.findById(req.params.id).exec();
        ingredientData.set(req.body);
        const data = await ingredientData.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteIngredient (req, res) {
    try {
        const data = await ingredientModel.deleteOne({'_id': req.params.id}).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    listAll,
    listIngredient,
    createIngredient,
    updateIngredient,
    deleteIngredient
}