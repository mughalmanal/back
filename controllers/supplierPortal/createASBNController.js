const ASBN = require("../../models/supplierPortal/ASBN");

exports.createASBN = async (req, res) => {
  try {
    const asbn = new ASBN(req.body);
    await asbn.save();
    res.status(201).json(asbn);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getASBNs = async (req, res) => {
  try {
    const asbns = await ASBN.find().sort({ createdAt: -1 });
    res.json(asbns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
