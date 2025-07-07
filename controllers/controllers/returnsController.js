const Returns = require("../models/Returns");

exports.createReturns = async (req, res) => {
  try {
    const doc = new Returns(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getReturns = async (req, res) => {
  try {
    const docs = await Returns.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateReturns = async (req, res) => {
  try {
    const doc = await Returns.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteReturns = async (req, res) => {
  try {
    await Returns.findByIdAndDelete(req.params.id);
    res.json({ message: "Returns deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
