const mongoose = require("mongoose");

const ReturnsSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Returns = mongoose.model("Returns", ReturnsSchema);
module.exports = { Returns };
