import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true, unique: true },
  clientName: { type: String, required: true },
  date: { type: Date, default: Date.now },
  items: [
    {
      description: String,
      quantity: Number,
      unitPrice: Number,
      total: Number,
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Unpaid' }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);
export default Invoice;
