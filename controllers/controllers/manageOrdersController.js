const ManageOrders = require("../models/ManageOrders");

exports.createManageOrders = async (req, res) => {
  try {
    const doc = new ManageOrders(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getManageOrders = async (req, res) => {
  try {
    const docs = await ManageOrders.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateManageOrders = async (req, res) => {
  try {
    const doc = await ManageOrders.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteManageOrders = async (req, res) => {
  try {
    await ManageOrders.findByIdAndDelete(req.params.id);
    res.json({ message: "ManageOrders deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
