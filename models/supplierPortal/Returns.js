const mongoose = require("mongoose");

const returnSchema = new mongoose.Schema({
  returnNumber: { type: String, required: true },
  shipmentNumber: String,
  returnDate: Date,
  quantity: Number,
  reason: String,
  refundRequested: Boolean
}, { timestamps: true });

module.exports = mongoose.model("Return", returnSchema);
