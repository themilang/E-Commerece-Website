const mongoose = require("mongoose");

const cartItemsSchema = new mongoose.Schema({
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "cart",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    require: true,
  },
  size: {
    type: Number,
    require: false,
  },
  quantity: {
    type: Number,
    require: true,
    default: {
      type: Number,
      default: 0,
    },
  },
  price: {
    type: Number,
    require: true,
  },
  discountedPrice: {
    type: Number,
    require: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
});
const CartItems = mongoose.Schema("cartItems", cartItemsSchema);
module.exports = CartItems;
