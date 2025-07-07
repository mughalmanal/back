const mongoose = require("mongoose");

const CreateASBNSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const CreateASBN = mongoose.model("CreateASBN", CreateASBNSchema);
module.exports = { CreateASBN };
