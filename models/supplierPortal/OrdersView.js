const mongoose = require("mongoose");

const OrdersViewSchema = new mongoose.Schema({
  // define your schema fields here
  field1: String,
  field2: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const OrdersView = mongoose.model("OrdersView", OrdersViewSchema);
module.exports = { OrdersView };
