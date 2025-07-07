const ManageOrders = require("../models/supplierPortal/Manageorders");

// CREATE
exports.createManageOrders = async (req, res) => {
  try {
    const item = new ManageOrders(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllManageOrders = async (req, res) => {
  try {
    const items = await ManageOrders.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getManageOrdersById = async (req, res) => {
  try {
    const item = await ManageOrders.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateManageOrders = async (req, res) => {
  try {
    const item = await ManageOrders.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteManageOrders = async (req, res) => {
  try {
    const item = await ManageOrders.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
