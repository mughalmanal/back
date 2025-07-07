const StockIn = require("../models/StockIn");

exports.addStockIn = async (req, res) => {
  try {
    const entry = new StockIn(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getStockIn = async (req, res) => {
  try {
    const entries = await StockIn.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStockIn = async (req, res) => {
  try {
    const updated = await StockIn.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteStockIn = async (req, res) => {
  try {
    await StockIn.findByIdAndDelete(req.params.id);
    res.json({ message: "Stock In entry deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
