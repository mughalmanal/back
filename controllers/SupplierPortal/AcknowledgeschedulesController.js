const AcknowledgeSchedules = require("../models/supplierPortal/Acknowledgeschedules");

// CREATE
exports.createAcknowledgeSchedules = async (req, res) => {
  try {
    const item = new AcknowledgeSchedules(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllAcknowledgeSchedules = async (req, res) => {
  try {
    const items = await AcknowledgeSchedules.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getAcknowledgeSchedulesById = async (req, res) => {
  try {
    const item = await AcknowledgeSchedules.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateAcknowledgeSchedules = async (req, res) => {
  try {
    const item = await AcknowledgeSchedules.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteAcknowledgeSchedules = async (req, res) => {
  try {
    const item = await AcknowledgeSchedules.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
