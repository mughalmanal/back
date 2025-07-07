const mongoose = require("mongoose");

const paymentEntrySchema = new mongoose.Schema({
  payer: { type: String, required: true },
  amount: { type: Number, required: true },
  method: {
    type: String,
    enum: ["Cash", "Bank Transfer", "Cheque", "Other"],
    default: "Cash"
  },
  date: { type: String, required: true },
  notes: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model("PaymentEntry", paymentEntrySchema);
