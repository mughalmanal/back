const ManageAgreements = require("../models/ManageAgreements");

exports.createManageAgreements = async (req, res) => {
  try {
    const doc = new ManageAgreements(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getManageAgreements = async (req, res) => {
  try {
    const docs = await ManageAgreements.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateManageAgreements = async (req, res) => {
  try {
    const doc = await ManageAgreements.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteManageAgreements = async (req, res) => {
  try {
    await ManageAgreements.findByIdAndDelete(req.params.id);
    res.json({ message: "ManageAgreements deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
