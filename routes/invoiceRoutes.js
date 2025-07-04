const express = require("express");
const router = express.Router();
const Invoice = require("../models/Invoice");

// CREATE
router.post("/", async (req, res) => {
  try {
    const item = new Invoice(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: "Creation failed" });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const items = await Invoice.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Invoice.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

module.exports = router;
