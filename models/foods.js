const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodsSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      required: true,
      trim: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    manufactureDate: {
      type: Date,
      required: true,
    },
    expirationDate: {
      type: Date,
      required: true,
    },
    ingredients: {
      type: [String], // Array of ingredients
      required: true,
    },
    nutritionalValue: {
      calories: { type: Number },
      fat: { type: Number, default: 0 },
      protein: { type: Number, default: 0 },
      carbohydrates: { type: Number, default: 0 },
    },
    comments: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Foods = mongoose.model("Food", foodsSchema);

module.exports = Foods;
