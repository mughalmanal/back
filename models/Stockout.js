const mongoose = require("mongoose");

const stockOutSchema = new mongoose.Schema({
  product: { type: String, required: true },
  quantity: Number,
  date: { type: Date, default: Date.now },
  client: String,
  referenceNo: String,
}, { timestamps: true });

module.exports = mongoose.model("StockOut", stockOutSchema);
