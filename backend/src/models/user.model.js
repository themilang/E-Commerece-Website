const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "COSTUMER", // Corrected typo "COSTUMER" or "CUSTOMER"?
  },
  mobile: {
    type: String,
  },
  address: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
    },
  ],
  paymentinfo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "payment_info",
    },
  ],
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],

  createdAt: {
    type: Date, // Corrected typo "type" instead of "typee"
    default: Date.now(),
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
