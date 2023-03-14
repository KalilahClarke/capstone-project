// CONFIGURATIONS
const express = require("express");
const ratings = express.Router();

// IMPORTING QUERIES
const {
  getRatings,
  leaveRating,
  viewRating,
} = require("../queries/ratings.js");

// BUILDING OUT THE ROUTES
// INDEX / ALL RATINGS
ratings.get("/", async (req, res) => {
  const allRatings = await getRatings();
  if (allRatings[0]) {
    res.status(200).json(allRatings);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

// SHOW / SINGLE RATING
ratings.get("/:id", async (req, res) => {
  const { id } = req.params;
  const rating = await viewRating(id);
  if (rating) {
    res.json(rating);
  } else {
    res.status(404).json({ error: "not Found!" });
  }
});

// CREATE OR LEAVE A RATING
ratings.post("/", async (req, res) => {
  try {
    const rating = await leaveRating(req.body);
    res.json(rating);
  } catch (error) {
    return error;
  }
});

module.exports = ratings;
