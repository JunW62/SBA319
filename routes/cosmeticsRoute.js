const express = require("express");
const router = express.Router();
const Cosmetics = require("../models/cosmetics");

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
    const oneCosmetic = await Cosmetic.findById(req.params.id);
    res.json(oneCosmetic);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cosmetic by id" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCosmetics = await Cosmetic.create(req.body);
    res.json(newCosmetics);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cosmetic by id" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateCosmetics = await Cosmetic.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json(updateCosmetics);
  } catch (error) {
    res.status(500).json({ message: "Error update cosmetic" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteCosmetics = await Cosmetic.findByIdAndDelete(req.params.id);
    res.json(deleteCosmetics);
  } catch (error) {
    res.status(500).json({ message: "Error delete cosmetic" });
  }
});

module.export = rounter;
