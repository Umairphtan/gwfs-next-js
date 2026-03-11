const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  category: {
    type: String,
    enum: ["men", "women", "kids"],
    required: true
  },

  stock: {
    type: Number,
    default: 0
  },

  status: {
    type: String,
    enum: ["in", "out"],
    default: "in"
  },

  image: {
    type: String
  }

}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);