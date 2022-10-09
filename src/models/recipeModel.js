const mongoose = require("mongoose");
const Schema = mongoose.Schema

const recipeSchema = new Schema(
    {
        name: String,
        isAlcoholic: Boolean,
        description: String,
        instruction: String,
        ingredient: [],
        thumbnail: String
    }
);

const recipeModel = mongoose.model("recipeModel", recipeSchema, "recipeModel");

module.exports = { recipeModel }