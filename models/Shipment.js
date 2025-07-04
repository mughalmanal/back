const mongoose = require("mongoose");

const ShipmentSchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Shipment", ShipmentSchema);
