import express from "express";

import Fruit from "../models/fruit.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allFruits = await Fruit.find({});
    res.json(allFruits);
  } catch (err) {
    res.status(500).json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  const oneFruits = await Fruit.findById(req.params.id);
  res.json(oneFruits);
});

router.post("/", async (req, res) => {
  const newFruits = await Fruit.create(req.body);
  res.json(newFruits);
});

router.put("/:id", async (req, res) => {
  const updateFruits = await Fruit.findByIdAndUpdate(req.params.id, req.body);
  res.json(updateFruits);
});

router.delete("/:id", async (req, res) => {
  const deleteFruits = await Fruit.findByIdAndDelete(req.params.id);
  res.json(deleteFruits);
});

export default router;
