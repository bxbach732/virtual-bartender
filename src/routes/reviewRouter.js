const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

//Get all reviews
router.get("/", reviewController.listAll);

//Get a specific review
router.get("/:id", reviewController.listReview);

//Get a reviews of a product
router.get("/getReviews/:pid", reviewController.listReviewsOfProduct);

//Create a review
router.post("/", reviewController.createReview);

//Update a review
router.put("/:id", reviewController.updateReview);

//Delete a review
router.delete("/:id", reviewController.deleteReview);

module.exports = router;