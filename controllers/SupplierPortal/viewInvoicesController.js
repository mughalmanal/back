const ViewInvoices = require("../models/ViewInvoices");

exports.createViewInvoices = async (req, res) => {
  try {
    const doc = new ViewInvoices(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getViewInvoices = async (req, res) => {
  try {
    const docs = await ViewInvoices.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateViewInvoices = async (req, res) => {
  try {
    const doc = await ViewInvoices.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteViewInvoices = async (req, res) => {
  try {
    await ViewInvoices.findByIdAndDelete(req.params.id);
    res.json({ message: "ViewInvoices deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
