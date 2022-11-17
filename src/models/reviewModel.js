const mongoose = require("mongoose");
const Schema = mongoose.Schema

const reviewSchema = new Schema(
    {
        productId: Schema.Types.ObjectId,
        rating: Number,
        comment: String
    }
);

const reviewModel = mongoose.model("reviewModel", reviewSchema, "reviewModel");

module.exports = { reviewModel }