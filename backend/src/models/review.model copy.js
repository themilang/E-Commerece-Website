const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "users",
  },

  product: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "products",
  },
  review: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Review = mongoose.Schema("reviews", reviewSchema);
module.exports = Review;
