const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        email: String,
        phone: String,
        isAdmin: Boolean
    }
);

const userModel = mongoose.model("userModel", userSchema, "userModel");

module.exports = { userModel }