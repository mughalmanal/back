const CreateASN = require("../models/CreateASN");

exports.createCreateASN = async (req, res) => {
  try {
    const doc = new CreateASN(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCreateASN = async (req, res) => {
  try {
    const docs = await CreateASN.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCreateASN = async (req, res) => {
  try {
    const doc = await CreateASN.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCreateASN = async (req, res) => {
  try {
    await CreateASN.findByIdAndDelete(req.params.id);
    res.json({ message: "CreateASN deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
