const mongoose = require("mongoose");
const Schema = moogose.Schema;

const CosmeticsSchema = new moogose.Schema(
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
    comments: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Cosmetics = mongoose.model("Cosmetic", cosmeticsSchema);

module.export = Cosmetics;
