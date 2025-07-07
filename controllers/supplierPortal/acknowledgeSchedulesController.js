const AcknowledgeSchedule = require("../../models/supplierPortal/AcknowledgeSchedule");

exports.acknowledgeSchedule = async (req, res) => {
  try {
    const ack = new AcknowledgeSchedule(req.body);
    await ack.save();
    res.status(201).json(ack);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAcknowledgedSchedules = async (req, res) => {
  try {
    const acks = await AcknowledgeSchedule.find().sort({ createdAt: -1 });
    res.json(acks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAcknowledgedSchedule = async (req, res) => {
  try {
    const updated = await AcknowledgeSchedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAcknowledgedSchedule = async (req, res) => {
  try {
    await AcknowledgeSchedule.findByIdAndDelete(req.params.id);
    res.json({ message: "Acknowledged schedule deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
