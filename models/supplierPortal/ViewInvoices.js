const mongoose = require("mongoose");

const ViewInvoicesSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const ViewInvoices = mongoose.model("ViewInvoices", ViewInvoicesSchema);
module.exports = { ViewInvoices };
