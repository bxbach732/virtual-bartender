const mongoose = require("mongoose");
const Schema = mongoose.Schema

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