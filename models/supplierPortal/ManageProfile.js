const mongoose = require("mongoose");

const ManageProfileSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const ManageProfile = mongoose.model("ManageProfile", ManageProfileSchema);
module.exports = { ManageProfile };
