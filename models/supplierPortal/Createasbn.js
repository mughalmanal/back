const mongoose = require("mongoose");

const asbnSchema = new mongoose.Schema({
  asbnNumber: { type: String, required: true },
  shipmentReference: String,
  contents: [
    {
      item: String,
      quantity: Number
    }
  ],
  dispatchedAt: Date
}, { timestamps: true });

module.exports = mongoose.model("ASBN", asbnSchema);
