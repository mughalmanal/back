const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true }, // e.g., "Sales", "Stock", etc.
    data: { type: Object, required: true }, // JSON structure for flexibility
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);
