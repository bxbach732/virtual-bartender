const mongoose = require("mongoose");
const Schema = mongoose.Schema

//Create schema for the user table
const userSchema = new Schema(
    {
        email: String,
        authID: String,
        isAdmin: Boolean
    }
);

const userModel = mongoose.model("userModel", userSchema, "userModel");

module.exports = { userModel }