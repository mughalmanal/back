const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true },
  client: String,
  items: [
    {
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  status: { type: String, default: "Pending" },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Invoice", invoiceSchema);
