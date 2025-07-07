const mongoose = require("mongoose");

const paymentEntrySchema = new mongoose.Schema({
  invoiceId: String,
  amountPaid: Number,
  paymentMethod: String,
  paymentDate: { type: Date, default: Date.now },
  remarks: String,
}, { timestamps: true });

module.exports = mongoose.model("PaymentEntry", paymentEntrySchema);
