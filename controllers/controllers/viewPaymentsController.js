const ViewPayments = require("../models/ViewPayments");

exports.createViewPayments = async (req, res) => {
  try {
    const doc = new ViewPayments(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getViewPayments = async (req, res) => {
  try {
    const docs = await ViewPayments.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateViewPayments = async (req, res) => {
  try {
    const doc = await ViewPayments.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteViewPayments = async (req, res) => {
  try {
    await ViewPayments.findByIdAndDelete(req.params.id);
    res.json({ message: "ViewPayments deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
