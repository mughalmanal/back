const CreateInvoice = require("../models/CreateInvoice");

exports.createCreateInvoice = async (req, res) => {
  try {
    const doc = new CreateInvoice(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCreateInvoice = async (req, res) => {
  try {
    const docs = await CreateInvoice.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCreateInvoice = async (req, res) => {
  try {
    const doc = await CreateInvoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCreateInvoice = async (req, res) => {
  try {
    await CreateInvoice.findByIdAndDelete(req.params.id);
    res.json({ message: "CreateInvoice deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
