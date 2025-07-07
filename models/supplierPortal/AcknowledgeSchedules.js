const mongoose = require("mongoose");

const AcknowledgeSchedulesSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const AcknowledgeSchedules = mongoose.model("AcknowledgeSchedules", AcknowledgeSchedulesSchema);
module.exports = { AcknowledgeSchedules };
