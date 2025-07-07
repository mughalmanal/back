
import Invoice from '../models/invoiceModel.js';

// Generate unique invoice numbers (basic logic)
let invoiceCount = 1;

export const createInvoice = async (req, res) => {
  try {
    const data = req.body;

    const invoiceNumber = `INV-${invoiceCount.toString().padStart(4, '0')}`;
    invoiceCount++;

    const newInvoice = new Invoice({
      ...data,
      invoiceNumber,
    });

    await newInvoice.save();
    res.status(201).json(newInvoice);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create invoice', error });
  }
};

export const getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching invoice', error });
  }
};
