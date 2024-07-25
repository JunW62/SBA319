const express = require("express");
const router = express.Router();
const HouseholdEssential = require("../models/householdEssentials");
const seedHouseholdEssentials = require("../db/seedHouseholdEssentials");

router.get("/seed", async (req, res) => {
  try {
    await HouseholdEssential.deleteMany({});
    await HouseholdEssential.create(seedHouseholdEssentials);
    res.json(seedHouseholdEssentials);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to load seed data", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allItems = await HouseholdEssential.find({});
    res.json(allItems);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error fetching household essentials",
        error: error.message,
      });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await HouseholdEssential.findById(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "Household essential not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error fetching household essential by id",
        error: error.message,
      });
  }
});

router.post("/", async (req, res) => {
  try {
    const newItem = await HouseholdEssential.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error creating household essential",
        error: error.message,
      });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateItem = await HouseholdEssential.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updateItem) {
      res.json(updateItem);
    } else {
      res.status(404).json({ message: "Household essential not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error updating household essential",
        error: error.message,
      });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteItem = await HouseholdEssential.findByIdAndDelete(
      req.params.id
    );
    if (deleteItem) {
      res
        .status(200)
        .json({ message: "Household essential deleted", item: deleteItem });
    } else {
      res.status(404).json({ message: "Household essential not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error deleting household essential",
        error: error.message,
      });
  }
});

module.exports = router;
