const mongoose = require("mongoose");

const acknowledgeScheduleSchema = new mongoose.Schema({
  scheduleId: { type: String, required: true },
  acknowledgedBy: String,
  items: [
    {
      name: String,
      quantity: Number
    }
  ],
  notes: String,
  status: { type: String, default: "Acknowledged" }
}, { timestamps: true });

module.exports = mongoose.model("AcknowledgeSchedule", acknowledgeScheduleSchema);
