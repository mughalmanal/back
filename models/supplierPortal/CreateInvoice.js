const mongoose = require("mongoose");

const createInvoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true },
  supplier: { type: String },
  invoiceDate: { type: Date },
  items: [
    {
      description: String,
      quantity: Number,
      unitPrice: Number,
    },
  ],
  totalAmount: Number,
  status: {
    type: String,
    enum: ["Pending", "Paid", "Rejected"],
    default: "Pending",
  },
}, { timestamps: true });

module.exports = mongoose.model("CreateInvoice", createInvoiceSchema);
