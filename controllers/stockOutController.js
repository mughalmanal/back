const StockOut = require("../models/Stockout");

exports.addStockOut = async (req, res) => {
  try {
    const entry = new StockOut(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getStockOut = async (req, res) => {
  try {
    const entries = await StockOut.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStockOut = async (req, res) => {
  try {
    const updated = await StockOut.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteStockOut = async (req, res) => {
  try {
    await StockOut.findByIdAndDelete(req.params.id);
    res.json({ message: "Stock Out entry deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
