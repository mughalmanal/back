const CreateInvoiceNoPo = require("../models/CreateInvoiceNoPo");

exports.createCreateInvoiceNoPo = async (req, res) => {
  try {
    const doc = new CreateInvoiceNoPo(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCreateInvoiceNoPo = async (req, res) => {
  try {
    const docs = await CreateInvoiceNoPo.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCreateInvoiceNoPo = async (req, res) => {
  try {
    const doc = await CreateInvoiceNoPo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCreateInvoiceNoPo = async (req, res) => {
  try {
    await CreateInvoiceNoPo.findByIdAndDelete(req.params.id);
    res.json({ message: "CreateInvoiceNoPo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
