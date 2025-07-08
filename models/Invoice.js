const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true, unique: true },
  clientName: { type: String, required: true },
  clientEmail: { type: String },
  date: { type: Date, default: Date.now },
  dueDate: { type: Date },
  items: [
    {
      description: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalAmount: { type: Number },
  status: { type: String, enum: ["Paid", "Unpaid", "Overdue"], default: "Unpaid" },
}, { timestamps: true });

module.exports = mongoose.model("Invoice", invoiceSchema);
