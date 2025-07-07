const Receipt = require("../../models/supplierPortal/Receipt");

exports.getReceipts = async (req, res) => {
  try {
    const receipts = await Receipt.find().sort({ createdAt: -1 });
    res.json(receipts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addReceipt = async (req, res) => {
  try {
    const receipt = new Receipt(req.body);
    await receipt.save();
    res.status(201).json(receipt);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
