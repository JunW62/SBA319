const express = require("express");
const router = express.Router();
const Foods = require("../models/foods");
const seedFoods = require("../db/seedFoods");

router.get("/seed", async (req, res) => {
  try {
    await Foods.deleteMany({});
    await Foods.create(seedFoods);
    res.json(seedFoods);
  } catch (error) {
    console.log(`Something went wrong loading seed data ${error.message}`);
    res
      .status(500)
      .json({ message: "Failed to load seed data", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allFoods = await Foods.find({});
    res.json(allFoods);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching foods", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const oneFood = await Foods.findById(req.params.id);
    if (oneFood) {
      res.json(oneFood);
    } else {
      res.status(404).json({ message: "Food not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching food by id", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newFood = await Foods.create(req.body);
    res.status(201).json(newFood);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating food", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateFood = await Foods.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (updateFood) {
      res.json(updateFood);
    } else {
      res.status(404).json({ message: "Food not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating food", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteFood = await Foods.findByIdAndDelete(req.params.id);
    if (deleteFood) {
      res.status(200).json({
        message: "The food has been deleted",
        food: deleteFood,
      });
    } else {
      res.status(404).json({ message: "Food not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting food", error: error.message });
  }
});

module.exports = router;
