const UploadASN = require("../models/supplierPortal/Uploadasn");

// CREATE
exports.createUploadASN = async (req, res) => {
  try {
    const item = new UploadASN(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllUploadASN = async (req, res) => {
  try {
    const items = await UploadASN.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getUploadASNById = async (req, res) => {
  try {
    const item = await UploadASN.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateUploadASN = async (req, res) => {
  try {
    const item = await UploadASN.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteUploadASN = async (req, res) => {
  try {
    const item = await UploadASN.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
