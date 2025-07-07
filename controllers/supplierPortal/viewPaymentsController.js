const SupplierPayment = require("../../models/supplierPortal/SupplierPayment");

exports.addPayment = async (req, res) => {
  try {
    const payment = new SupplierPayment(req.body);
    await payment.save();
    res.status(201).json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPayments = async (req, res) => {
  try {
    const payments = await SupplierPayment.find().sort({ createdAt: -1 });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
