const mongoose = require("mongoose");

const ManageOrdersSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const ManageOrders = mongoose.model("ManageOrders", ManageOrdersSchema);
module.exports = { ManageOrders };
