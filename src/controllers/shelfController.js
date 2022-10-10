const { shelfModel } = require("../models/shelfModel")

async function listAll (req, res) {
    try {
        const data = await shelfModel.find().exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function listShelf (req, res) {
    try {
        const data = await shelfModel.findById(req.params.id).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function createShelf (req, res) {
    try {
        const newShelf = new shelfModel(req.body);
        const data = await newShelf.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateShelf (req, res) {
    try {   
        let shelfData = await shelfModel.findById(req.params.id).exec();
        shelfData.set(req.body);
        const data = await shelfData.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteShelf (req, res) {
    try {
        const data = await shelfModel.deleteOne({'_id': req.params.id}).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

////////////////////////
async function addIngredient (req, res) {
    try {   
        const newIngredientID = req.params.iid;
        let shelfData = await shelfModel.findById(req.params.id).exec();
        shelfData.content.push(newIngredientID);
        const data = await shelfData.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function findPossibleRecipes (req, res) {
    try {   
        //WIP
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    listAll,
    listShelf,
    createShelf,
    updateShelf,
    deleteShelf,
    addIngredient,
    findPossibleRecipes
}