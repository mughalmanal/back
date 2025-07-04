const mongoose = require("mongoose");

const AgreementSchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Agreement", AgreementSchema);
