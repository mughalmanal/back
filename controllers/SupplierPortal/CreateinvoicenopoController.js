const CreateInvoiceNoPo = require("../models/supplierPortal/Createinvoicenopo");

// CREATE
exports.createCreateInvoiceNoPo = async (req, res) => {
  try {
    const item = new CreateInvoiceNoPo(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllCreateInvoiceNoPo = async (req, res) => {
  try {
    const items = await CreateInvoiceNoPo.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getCreateInvoiceNoPoById = async (req, res) => {
  try {
    const item = await CreateInvoiceNoPo.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateCreateInvoiceNoPo = async (req, res) => {
  try {
    const item = await CreateInvoiceNoPo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteCreateInvoiceNoPo = async (req, res) => {
  try {
    const item = await CreateInvoiceNoPo.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
