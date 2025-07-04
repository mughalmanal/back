const mongoose = require("mongoose");

const InvoicesPaymentSchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("InvoicesPayment", InvoicesPaymentSchema);
