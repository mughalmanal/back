const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: String,
  email: String,
  address: String,
  company: String,
  cnic: String,
  productsSupplied: [
    {
      name: String,
      price: Number,
      quantity: Number,
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model("Vendor", vendorSchema);
