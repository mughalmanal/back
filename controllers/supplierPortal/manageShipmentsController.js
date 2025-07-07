const Shipment = require("../../models/supplierPortal/Shipment");

exports.createShipment = async (req, res) => {
  try {
    const shipment = new Shipment(req.body);
    await shipment.save();
    res.status(201).json(shipment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find().sort({ createdAt: -1 });
    res.json(shipments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateShipment = async (req, res) => {
  try {
    const updated = await Shipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteShipment = async (req, res) => {
  try {
    await Shipment.findByIdAndDelete(req.params.id);
    res.json({ message: "Shipment deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
