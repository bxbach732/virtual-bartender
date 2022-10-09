const mongoose = require("mongoose");
const Schema = mongoose.Schema

const shelfSchema = new Schema(
    {
        userID: String,
        content: []
    }
);

const shelfModel = mongoose.model("shelfModel", shelfSchema, "shelfModel");

module.exports = { shelfModel }