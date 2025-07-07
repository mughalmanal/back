const mongoose = require("mongoose");

const CreateInvoiceSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const CreateInvoice = mongoose.model("CreateInvoice", CreateInvoiceSchema);
module.exports = { CreateInvoice };
