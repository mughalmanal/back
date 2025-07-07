const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: String,
  email: String,
  address: String,
  company: String,
  gstNumber: String,
}, { timestamps: true });

module.exports = mongoose.model("Vendor", vendorSchema);
