const mongoose = require("mongoose");

const ManageSchedulesSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const ManageSchedules = mongoose.model("ManageSchedules", ManageSchedulesSchema);
module.exports = { ManageSchedules };
