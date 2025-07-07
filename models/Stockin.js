const mongoose = require("mongoose");

const stockInSchema = new mongoose.Schema({
  product: { type: String, required: true },
  quantity: Number,
  date: { type: Date, default: Date.now },
  vendor: String,
  referenceNo: String,
}, { timestamps: true });

module.exports = mongoose.model("StockIn", stockInSchema);
