const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

// CREATE
router.post("/", async (req, res) => {
  try {
    const item = new Report(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: "Creation failed" });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const items = await Report.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Report.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

module.exports = router;
