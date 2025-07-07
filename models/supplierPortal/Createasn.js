const mongoose = require("mongoose");

const asnSchema = new mongoose.Schema({
  asnNumber: { type: String, required: true },
  shipmentNumber: String,
  contents: [
    {
      item: String,
      quantity: Number
    }
  ],
  dateCreated: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("ASN", asnSchema);
