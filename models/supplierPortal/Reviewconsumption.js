const mongoose = require("mongoose");

const consumptionSchema = new mongoose.Schema({
  item: String,
  usedQuantity: Number,
  date: Date,
  recordedBy: String
}, { timestamps: true });

module.exports = mongoose.model("Consumption", consumptionSchema);
