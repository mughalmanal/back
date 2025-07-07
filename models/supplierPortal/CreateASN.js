const mongoose = require("mongoose");

const CreateASNSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const CreateASN = mongoose.model("CreateASN", CreateASNSchema);
module.exports = { CreateASN };
