const { reviewModel } = require("../models/reviewModel")

//Basic CRUD APIs
async function listAll (req, res) { //Get all reviews
    try {
        const data = await reviewModel.find().exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function listReview (req, res) { //Get a review
    try {
        const data = await reviewModel.findById(req.params.id).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function listReviewsOfProduct (req, res) { //Get all reviews of a certain product
    try {
        const productId = req.params.pid;
        const data = await reviewModel.find({"productId": productId}).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}
async function createReview (req, res) { //Create a new review
    try {
        const newReview = new reviewModel(req.body);
        const data = await newReview.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateReview (req, res) { //Update a review
    try {   
        let reviewData = await reviewModel.findById(req.params.id).exec();
        reviewData.set(req.body);
        const data = await reviewData.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteReview (req, res) { //Delete a review
    try {
        const data = await reviewModel.deleteOne({ '_id': req.params.id }).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    listAll,
    listReview,
    listReviewsOfProduct,
    createReview,
    updateReview,
    deleteReview
}