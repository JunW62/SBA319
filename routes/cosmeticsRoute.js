const express = require("express");
const router = express.Router();
const Cosmetics = require("../models/cosmetics");
const seedCosmetics = require("../db/seedCosmetics");

router.get("/seed", async (req, res) => {
  try {
    await Cosmetics.deleteMany({});
    await Cosmetics.create(seedCosmetics);
    res.json(seedCosmetics);
  } catch (error) {
    console.log(`Something went wrong loading seed data ${error.message}`);
  }
});

router.get("/", async (req, res) => {
  try {
    const allCosmetics = await Cosmetics.find({});
    res.json(allCosmetics);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cosmetics" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const oneCosmetic = await Cosmetics.findById(req.params.id);
    res.json(oneCosmetic);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cosmetic by id" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCosmetics = await Cosmetics.create(req.body, { new: true });
    res.json(newCosmetics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error create cosmetic" });
  }
});

// router.put("/:id", async (req, res) => {
//   try {
//     const updateCosmetic = await Cosmetics.findByIdAndUpdate(
//       req.params.id,
//       {
//         brandName: req.body.brandName,
//         productName: req.body.productName,
//         category: req.body.category,
//         location: req.body.location,
//         price: req.body.price,
//         manufactureDate: req.body.manufactureDate,
//         expirationDate: req.body.expirationDate,
//         comments: req.body.comments,
//       },
//       { new: true }
//     );
//     if (!updateCosmetic) {
//       return res.status(404).json({ message: "Cosmetic not found" });
//     }
//     res.json(updateCosmetic);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error updating cosmetic", error: error.message });
//   }
// });

router.put("/:id", async (req, res) => {
  try {
    const updateCosmetic = await Cosmetics.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          brandName: req.body.brandName,
          productName: req.body.productName,
          category: req.body.category,
          location: req.body.location,
          price: req.body.price,
          manufactureDate: req.body.manufactureDate,
          expirationDate: req.body.expirationDate,
          comments: req.body.comments,
        },
      },
      { new: true }
    );
    if (!updateCosmetic) {
      return res.status(404).json({ message: "Cosmetic not found" });
    }
    res.json(updateCosmetic);
    console.log("Update Result:", updateCosmetic);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating cosmetic", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteCosmetic = await Cosmetics.findByIdAndDelete(req.params.id);
    if (deleteCosmetic) {
      res.status(200).json({
        message: "The cosmetic has been deleted",
        cosmetic: deleteCosmetic,
      });
    } else {
      res.status(404).json({ message: "Cosmetic not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting cosmetic", error: error.message });
  }
});

module.exports = router;
