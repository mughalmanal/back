const ManageShipments = require("../models/supplierPortal/Manageshipments");

// CREATE
exports.createManageShipments = async (req, res) => {
  try {
    const item = new ManageShipments(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllManageShipments = async (req, res) => {
  try {
    const items = await ManageShipments.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getManageShipmentsById = async (req, res) => {
  try {
    const item = await ManageShipments.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateManageShipments = async (req, res) => {
  try {
    const item = await ManageShipments.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteManageShipments = async (req, res) => {
  try {
    const item = await ManageShipments.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
