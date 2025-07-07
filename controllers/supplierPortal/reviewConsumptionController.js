const Consumption = require("../../models/supplierPortal/Consumption");

exports.addConsumption = async (req, res) => {
  try {
    const entry = new Consumption(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getConsumption = async (req, res) => {
  try {
    const data = await Consumption.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
