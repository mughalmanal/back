const mongoose = require("mongoose");

const ViewReceiptsSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const ViewReceipts = mongoose.model("ViewReceipts", ViewReceiptsSchema);
module.exports = { ViewReceipts };
