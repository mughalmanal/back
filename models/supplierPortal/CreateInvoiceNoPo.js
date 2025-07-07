const mongoose = require("mongoose");

const CreateInvoiceNoPoSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const CreateInvoiceNoPo = mongoose.model("CreateInvoiceNoPo", CreateInvoiceNoPoSchema);
module.exports = { CreateInvoiceNoPo };
