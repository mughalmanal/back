const ManageSchedules = require("../../models/ManageSchedules");

exports.createManageSchedules = async (req, res) => {
  try {
    const doc = new ManageSchedules(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getManageSchedules = async (req, res) => {
  try {
    const docs = await ManageSchedules.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateManageSchedules = async (req, res) => {
  try {
    const doc = await ManageSchedules.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteManageSchedules = async (req, res) => {
  try {
    await ManageSchedules.findByIdAndDelete(req.params.id);
    res.json({ message: "ManageSchedules deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
