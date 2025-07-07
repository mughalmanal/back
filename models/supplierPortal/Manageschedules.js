const mongoose = require("mongoose");

const manageScheduleSchema = new mongoose.Schema({
  scheduleId: { type: String, required: true },
  orderNumber: String,
  deliveryWindow: String,
  items: [
    {
      name: String,
      quantity: Number
    }
  ],
  status: { type: String, default: "Scheduled" }
}, { timestamps: true });

module.exports = mongoose.model("ManageSchedule", manageScheduleSchema);
