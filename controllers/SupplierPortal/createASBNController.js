const CreateASBN = require("../models/CreateASBN");

exports.createCreateASBN = async (req, res) => {
  try {
    const doc = new CreateASBN(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCreateASBN = async (req, res) => {
  try {
    const docs = await CreateASBN.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCreateASBN = async (req, res) => {
  try {
    const doc = await CreateASBN.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCreateASBN = async (req, res) => {
  try {
    await CreateASBN.findByIdAndDelete(req.params.id);
    res.json({ message: "CreateASBN deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
