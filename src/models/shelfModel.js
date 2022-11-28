const mongoose = require("mongoose");
const Schema = mongoose.Schema

//Create schema for the shelf table
const shelfSchema = new Schema(
    {
        userID: Schema.Types.ObjectId,
        content: []
    }
);

const shelfModel = mongoose.model("shelfModel", shelfSchema, "shelfModel");

module.exports = { shelfModel }