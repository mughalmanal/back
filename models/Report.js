// This can be virtual (no model needed), but here's a basic schema if storing reports

const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  title: String,
  generatedOn: { type: Date, default: Date.now },
  type: String,
  data: mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model("Report", reportSchema);
