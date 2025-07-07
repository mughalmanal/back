const mongoose = require("mongoose");

const ManageAgreementsSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const ManageAgreements = mongoose.model("ManageAgreements", ManageAgreementsSchema);
module.exports = { ManageAgreements };
