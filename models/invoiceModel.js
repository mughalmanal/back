import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  invoiceDate: {
    type: Date,
    required: true,
  },
  dueDate: {
    type: Date,
  },
  remarks: {
    type: String,
  },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    }
  ],
  total: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("Invoice", invoiceSchema);
