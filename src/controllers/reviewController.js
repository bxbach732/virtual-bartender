const { reviewModel } = require("../models/reviewModel")

async function listAll (req, res) {
    try {
        const data = await reviewModel.find().exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function listReview (req, res) {
    try {
        const data = await reviewModel.findById(req.params.id).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function listReviewsOfProduct (req, res) {
    try {
        const productId = req.params.pid;
        const data = await reviewModel.find({"productId": productId}).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}
async function createReview (req, res) {
    try {
        const newReview = new reviewModel(req.body);
        const data = await newReview.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateReview (req, res) {
    try {   
        let reviewData = await reviewModel.findById(req.params.id).exec();
        reviewData.set(req.body);
        const data = await reviewData.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteReview (req, res) {
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