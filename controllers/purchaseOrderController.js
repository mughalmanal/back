const PurchaseOrder = require("../models/Purchaseorder");

exports.addPurchaseOrder = async (req, res) => {
  try {
    const order = new PurchaseOrder(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPurchaseOrders = async (req, res) => {
  try {
    const orders = await PurchaseOrder.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePurchaseOrder = async (req, res) => {
  try {
    const updated = await PurchaseOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePurchaseOrder = async (req, res) => {
  try {
    await PurchaseOrder.findByIdAndDelete(req.params.id);
    res.json({ message: "Purchase Order deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
