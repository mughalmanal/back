const AcknowledgeSchedules = require("../models/AcknowledgeSchedules");

exports.createAcknowledgeSchedules = async (req, res) => {
  try {
    const doc = new AcknowledgeSchedules(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAcknowledgeSchedules = async (req, res) => {
  try {
    const docs = await AcknowledgeSchedules.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAcknowledgeSchedules = async (req, res) => {
  try {
    const doc = await AcknowledgeSchedules.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAcknowledgeSchedules = async (req, res) => {
  try {
    await AcknowledgeSchedules.findByIdAndDelete(req.params.id);
    res.json({ message: "AcknowledgeSchedules deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
