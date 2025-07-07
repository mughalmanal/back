const ViewReceipts = require("../models/supplierPortal/Viewreceipts");

// CREATE
exports.createViewReceipts = async (req, res) => {
  try {
    const item = new ViewReceipts(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllViewReceipts = async (req, res) => {
  try {
    const items = await ViewReceipts.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getViewReceiptsById = async (req, res) => {
  try {
    const item = await ViewReceipts.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateViewReceipts = async (req, res) => {
  try {
    const item = await ViewReceipts.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteViewReceipts = async (req, res) => {
  try {
    const item = await ViewReceipts.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
