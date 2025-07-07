const mongoose = require("mongoose");

const returnSchema = new mongoose.Schema({
  returnNumber: { type: String, required: true },
  shipmentNumber: { type: String },
  returnDate: { type: Date },
  quantity: Number,
  reason: String,
  refundRequested: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Return", returnSchema);
