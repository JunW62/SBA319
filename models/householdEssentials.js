const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const householdEssentialsSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    brandName: {
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
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const HouseholdEssential = mongoose.model(
  "HouseholdEssential",
  householdEssentialsSchema
);
module.exports = HouseholdEssential;
