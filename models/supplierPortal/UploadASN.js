const mongoose = require("mongoose");

const UploadASNSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const UploadASN = mongoose.model("UploadASN", UploadASNSchema);
module.exports = { UploadASN };
