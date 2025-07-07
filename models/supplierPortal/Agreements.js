const mongoose = require("mongoose");

const agreementSchema = new mongoose.Schema({
  title: String,
  vendor: String,
  startDate: Date,
  endDate: Date,
  status: { type: String, enum: ["Active", "Expired"], default: "Active" },
  fileUrl: String
}, { timestamps: true });

module.exports = mongoose.model("Agreement", agreementSchema);
