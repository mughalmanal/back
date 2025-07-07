const mongoose = require("mongoose");

const manageOrdersSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  supplier: { type: String },
  orderDate: { type: Date },
  items: [
    {
      product: String,
      quantity: Number,
      unitPrice: Number,
    },
  ],
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Shipped", "Delivered"],
    default: "Pending",
  },
}, { timestamps: true });

module.exports = mongoose.model("ManageOrders", manageOrdersSchema);
