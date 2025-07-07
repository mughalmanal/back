const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  companyName: String,
  contactName: String,
  email: String,
  phone: String,
  address: String,
  gstNumber: String,
  ntnNumber: String
}, { timestamps: true });

module.exports = mongoose.model("SupplierProfile", profileSchema);
