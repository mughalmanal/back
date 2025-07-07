const mongoose = require("mongoose");

const manageSchedulesSchema = new mongoose.Schema({
  scheduleNumber: { type: String, required: true },
  orderRef: { type: String },
  scheduleDate: { type: Date },
  items: [
    {
      product: String,
      quantity: Number,
    },
  ],
  status: {
    type: String,
    enum: ["Scheduled", "In Progress", "Completed"],
    default: "Scheduled",
  },
}, { timestamps: true });

module.exports = mongoose.model("ManageSchedules", manageSchedulesSchema);
