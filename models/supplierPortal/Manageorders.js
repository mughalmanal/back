const mongoose = require("mongoose");

const manageOrderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  buyer: String,
  items: [
    {
      name: String,
      quantity: Number,
      unitPrice: Number
    }
  ],
  status: { type: String, default: "Pending" },
  deliveryDate: Date,
}, { timestamps: true });

module.exports = mongoose.model("ManageOrder", manageOrderSchema);
