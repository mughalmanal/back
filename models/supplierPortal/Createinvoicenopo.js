const mongoose = require("mongoose");

const supplierInvoiceNoPoSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true },
  vendor: String,
  description: String,
  amount: Number,
  status: { type: String, default: "Unpaid" },
  invoiceDate: Date
}, { timestamps: true });

module.exports = mongoose.model("SupplierInvoiceNoPo", supplierInvoiceNoPoSchema);
