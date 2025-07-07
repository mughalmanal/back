const mongoose = require("mongoose");

const supplierInvoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true },
  vendor: String,
  items: [
    {
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  status: { type: String, default: "Pending" },
  invoiceDate: Date
}, { timestamps: true });

module.exports = mongoose.model("SupplierInvoice", supplierInvoiceSchema);
