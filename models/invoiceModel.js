import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: String,
  clientName: String,
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalAmount: Number,
}, { timestamps: true });

export default mongoose.model("Invoice", invoiceSchema);
