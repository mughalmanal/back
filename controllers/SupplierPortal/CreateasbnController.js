const CreateASBN = require("../models/supplierPortal/Createasbn");

// CREATE
exports.createCreateASBN = async (req, res) => {
  try {
    const item = new CreateASBN(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllCreateASBN = async (req, res) => {
  try {
    const items = await CreateASBN.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getCreateASBNById = async (req, res) => {
  try {
    const item = await CreateASBN.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateCreateASBN = async (req, res) => {
  try {
    const item = await CreateASBN.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteCreateASBN = async (req, res) => {
  try {
    const item = await CreateASBN.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
