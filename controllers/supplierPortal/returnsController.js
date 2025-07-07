const Return = require("../../models/supplierPortal/Return");

exports.createReturn = async (req, res) => {
  try {
    const ret = new Return(req.body);
    await ret.save();
    res.status(201).json(ret);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getReturns = async (req, res) => {
  try {
    const returns = await Return.find().sort({ createdAt: -1 });
    res.json(returns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
