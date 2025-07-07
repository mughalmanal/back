const mongoose = require("mongoose");

const purchaseOrderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  vendor: String,
  items: [
    {
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  status: { type: String, default: "Open" },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("PurchaseOrder", purchaseOrderSchema);
