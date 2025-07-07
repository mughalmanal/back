const CreateInvoice = require("../models/supplierPortal/Createinvoice");

// CREATE
exports.createCreateInvoice = async (req, res) => {
  try {
    const item = new CreateInvoice(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllCreateInvoice = async (req, res) => {
  try {
    const items = await CreateInvoice.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getCreateInvoiceById = async (req, res) => {
  try {
    const item = await CreateInvoice.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateCreateInvoice = async (req, res) => {
  try {
    const item = await CreateInvoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteCreateInvoice = async (req, res) => {
  try {
    const item = await CreateInvoice.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
