const ViewInvoices = require("../models/supplierPortal/Viewinvoices");

// CREATE
exports.createViewInvoices = async (req, res) => {
  try {
    const item = new ViewInvoices(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllViewInvoices = async (req, res) => {
  try {
    const items = await ViewInvoices.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getViewInvoicesById = async (req, res) => {
  try {
    const item = await ViewInvoices.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateViewInvoices = async (req, res) => {
  try {
    const item = await ViewInvoices.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteViewInvoices = async (req, res) => {
  try {
    const item = await ViewInvoices.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
