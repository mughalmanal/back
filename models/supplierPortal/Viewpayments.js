const mongoose = require("mongoose");

const supplierPaymentSchema = new mongoose.Schema({
  paymentId: { type: String, required: true },
  invoiceNumber: String,
  vendor: String,
  amount: Number,
  paymentMethod: String,
  paymentDate: Date
}, { timestamps: true });

module.exports = mongoose.model("SupplierPayment", supplierPaymentSchema);
