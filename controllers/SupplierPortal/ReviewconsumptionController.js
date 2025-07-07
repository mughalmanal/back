const ReviewConsumption = require("../models/supplierPortal/Reviewconsumption");

// CREATE
exports.createReviewConsumption = async (req, res) => {
  try {
    const item = new ReviewConsumption(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllReviewConsumption = async (req, res) => {
  try {
    const items = await ReviewConsumption.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getReviewConsumptionById = async (req, res) => {
  try {
    const item = await ReviewConsumption.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateReviewConsumption = async (req, res) => {
  try {
    const item = await ReviewConsumption.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteReviewConsumption = async (req, res) => {
  try {
    const item = await ReviewConsumption.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
