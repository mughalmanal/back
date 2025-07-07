const mongoose = require("mongoose");

const ReviewConsumptionSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const ReviewConsumption = mongoose.model("ReviewConsumption", ReviewConsumptionSchema);
module.exports = { ReviewConsumption };
