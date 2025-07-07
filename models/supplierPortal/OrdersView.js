const mongoose = require("mongoose");

const ordersViewSchema = new mongoose.Schema({
  orderNumber: { type: String },
  supplier: { type: String },
  orderDate: { type: Date },
  items: [
    {
      product: String,
      quantity: Number,
      price: Number,
    },
  ],
  status: { type: String },
  notes: String,
}, { timestamps: true });

module.exports = mongoose.model("OrdersView", ordersViewSchema);
