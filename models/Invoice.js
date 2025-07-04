const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
