const mongoose = require("mongoose");

const ManageShipmentsSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const ManageShipments = mongoose.model("ManageShipments", ManageShipmentsSchema);
module.exports = { ManageShipments };
