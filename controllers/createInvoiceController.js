import Invoice from "../models/invoiceModel.js";

// Generate invoice number like INV-0021
const generateInvoiceNumber = async () => {
  const count = await Invoice.countDocuments();
  return `INV-${(count + 1).toString().padStart(4, '0')}`;
};

export const createInvoice = async (req, res) => {
  try {
    const { clientName, items } = req.body;
    const invoiceNumber = await generateInvoiceNumber();
    const totalAmount = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    const newInvoice = new Invoice({
      invoiceNumber,
      clientName,
      items,
      totalAmount,
    });

    const saved = await newInvoice.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Error creating invoice", error });
  }
};
