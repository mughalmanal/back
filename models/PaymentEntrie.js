const mongoose = require("mongoose");

const PaymentEntrieSchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("PaymentEntrie", PaymentEntrieSchema);
