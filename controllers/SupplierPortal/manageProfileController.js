const ManageProfile = require("../models/ManageProfile");

exports.createManageProfile = async (req, res) => {
  try {
    const doc = new ManageProfile(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getManageProfile = async (req, res) => {
  try {
    const docs = await ManageProfile.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateManageProfile = async (req, res) => {
  try {
    const doc = await ManageProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteManageProfile = async (req, res) => {
  try {
    await ManageProfile.findByIdAndDelete(req.params.id);
    res.json({ message: "ManageProfile deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
