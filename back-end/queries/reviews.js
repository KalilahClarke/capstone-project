const db = require("../db/dbConfig.js");

// Index -- all reviews
const getReviews = async () => {
  try {
    console.log("Listing all reviews for dev purposes");
    const reviews = await db.any("SELECT * FROM reviews ORDER BY id ASC");
    return reviews;
  } catch (error) {
    return error;
  }
};

const getSubmittedReviews = async (id) =>{
  try{
    const reviews = await db.any("SELECT * FROM reviews WHERE reviewer_id = $1", id);
    return reviews;
  }catch(error){
    return error;
  }
};

// --Routes--

// Create review
const leaveReview = async (review) => {
  try {
    console.log("Adding review to request");
    review = await db.one(
      "INSERT INTO reviews (reviewer_id, description, post_date, request_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        review.reviewer_id,
        review.reviewer_img,
        review.reviewed_id,
        review.description,
        review.post_date,
        review.request_id,
        
      ]
    );
    return review;
  } catch (error) {
    return error;
  }
};

// Single Review
const getReview = async (id) => {
  try {
    console.log("Retreiving single review with id of " + id);
    const review = await db.any("SELECT * FROM reviews WHERE request_id=$1", id);
    return review;
  } catch (error) {
    return error;
  }
};

// Edit Review
const editReview = async (review, id) => {
  try {
    console.log("Editing single review with id of " + id);
    const updatedReview = await db.one(
      "UPDATE reviews SET description=$1, post_date=$2 WHERE id=$3 RETURNING *",
      [review.description, review.post_date, id]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};


module.exports = {
  getReviews,
  getReview,
  leaveReview,
  editReview,
  getSubmittedReviews
};
