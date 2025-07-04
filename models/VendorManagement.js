const mongoose = require("mongoose");

const VendorManagementSchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("VendorManagement", VendorManagementSchema);
