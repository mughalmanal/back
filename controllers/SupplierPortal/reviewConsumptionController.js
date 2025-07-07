const ReviewConsumption = require("../models/ReviewConsumption");

exports.createReviewConsumption = async (req, res) => {
  try {
    const doc = new ReviewConsumption(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getReviewConsumption = async (req, res) => {
  try {
    const docs = await ReviewConsumption.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateReviewConsumption = async (req, res) => {
  try {
    const doc = await ReviewConsumption.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteReviewConsumption = async (req, res) => {
  try {
    await ReviewConsumption.findByIdAndDelete(req.params.id);
    res.json({ message: "ReviewConsumption deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
