const mongoose = require("mongoose");

const uploadedASNschema = new mongoose.Schema({
  fileName: String,
  fileUrl: String,
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("UploadedASN", uploadedASNschema);
