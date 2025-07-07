const mongoose = require("mongoose");

const acknowledgeSchedulesSchema = new mongoose.Schema({
  acknowledgeNumber: { type: String, required: true },
  scheduleRef: { type: String },
  date: { type: Date },
  notes: { type: String },
  acknowledgedBy: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("AcknowledgeSchedules", acknowledgeSchedulesSchema);
