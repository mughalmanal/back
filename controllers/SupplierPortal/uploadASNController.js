const UploadASN = require("../models/UploadASN");

exports.createUploadASN = async (req, res) => {
  try {
    const doc = new UploadASN(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUploadASN = async (req, res) => {
  try {
    const docs = await UploadASN.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUploadASN = async (req, res) => {
  try {
    const doc = await UploadASN.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteUploadASN = async (req, res) => {
  try {
    await UploadASN.findByIdAndDelete(req.params.id);
    res.json({ message: "UploadASN deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
