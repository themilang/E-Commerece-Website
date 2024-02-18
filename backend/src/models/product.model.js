const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  discountePrice: {
    type: Number,
    require: true,
  },
  discountPercent:{
    tyoe:Number,
  },

  discount: {
    type: Number,
    require: true,
    default: 0,
  },

  brand: {
    type: String,
  },
  color: {
    type: String,
  },
  sizes: [
    {
      name: { type: String },
      quantity: { type: Number },
    },
  ],
  imageUrl: {
    type: String,
  },
  rating: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ratings",
  },
  numrating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "reviews",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
});

const Product = mongoose.Schema("products", productSchema);
module.exports = Product;
