const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  shipmentNumber: { type: String, required: true },
  carrier: String,
  trackingId: String,
  status: { type: String, default: "In Transit" },
  items: [
    {
      name: String,
      quantity: Number
    }
  ],
  shipDate: Date,
  deliveryDate: Date
}, { timestamps: true });

module.exports = mongoose.model("Shipment", shipmentSchema);
