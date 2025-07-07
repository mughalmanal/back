const mongoose = require("mongoose");

const ViewPaymentsSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const ViewPayments = mongoose.model("ViewPayments", ViewPaymentsSchema);
module.exports = { ViewPayments };
