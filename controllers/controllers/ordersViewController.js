const OrdersView = require("../models/OrdersView");

exports.createOrdersView = async (req, res) => {
  try {
    const doc = new OrdersView(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOrdersView = async (req, res) => {
  try {
    const docs = await OrdersView.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOrdersView = async (req, res) => {
  try {
    const doc = await OrdersView.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteOrdersView = async (req, res) => {
  try {
    await OrdersView.findByIdAndDelete(req.params.id);
    res.json({ message: "OrdersView deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
