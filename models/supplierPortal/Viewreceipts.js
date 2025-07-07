const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
  receiptNumber: { type: String, required: true },
  shipmentNumber: String,
  items: [
    {
      name: String,
      quantity: Number
    }
  ],
  receivedDate: Date
}, { timestamps: true });

module.exports = mongoose.model("Receipt", receiptSchema);
