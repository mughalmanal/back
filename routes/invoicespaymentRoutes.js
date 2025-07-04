const express = require("express");
const router = express.Router();
const InvoicesPayment = require("../models/InvoicesPayment");

// CREATE
router.post("/", async (req, res) => {
  try {
    const item = new InvoicesPayment(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: "Creation failed" });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const items = await InvoicesPayment.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await InvoicesPayment.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

module.exports = router;
