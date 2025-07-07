const ViewReceipts = require("../models/ViewReceipts");

exports.createViewReceipts = async (req, res) => {
  try {
    const doc = new ViewReceipts(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getViewReceipts = async (req, res) => {
  try {
    const docs = await ViewReceipts.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateViewReceipts = async (req, res) => {
  try {
    const doc = await ViewReceipts.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteViewReceipts = async (req, res) => {
  try {
    await ViewReceipts.findByIdAndDelete(req.params.id);
    res.json({ message: "ViewReceipts deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
