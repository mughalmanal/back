const ManageSchedules = require("../models/supplierPortal/Manageschedules");

// CREATE
exports.createManageSchedules = async (req, res) => {
  try {
    const item = new ManageSchedules(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllManageSchedules = async (req, res) => {
  try {
    const items = await ManageSchedules.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getManageSchedulesById = async (req, res) => {
  try {
    const item = await ManageSchedules.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateManageSchedules = async (req, res) => {
  try {
    const item = await ManageSchedules.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteManageSchedules = async (req, res) => {
  try {
    const item = await ManageSchedules.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
