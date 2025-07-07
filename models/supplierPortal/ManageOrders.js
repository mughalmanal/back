const mongoose = require("mongoose");

const manageOrdersSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  supplierName: { type: String },
  items: [
    {
      product: String,
      quantity: Number,
      unitPrice: Number,
    },
  ],
  status: { type: String, enum: ["Pending", "Approved", "Shipped", "Delivered"], default: "Pending" },
  deliveryDate: Date,
}, { timestamps: true });

module.exports = mongoose.model("ManageOrders", manageOrdersSchema);
