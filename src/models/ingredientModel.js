const mongoose = require("mongoose");
const Schema = mongoose.Schema

//Create schema for the ingredient table
const ingredientSchema = new Schema(
    {
        name: String,
        isAlcoholic: Boolean,
        description: String,
        thumbnail: String,
        type: String
    }
);

const ingredientModel = mongoose.model("ingredientModel", ingredientSchema, "ingredientModel");

module.exports = { ingredientModel }