import Invoice from '../models/invoiceModel.js';
import { Parser } from 'json2csv';
import PDFDocument from 'pdfkit';
import { Readable } from 'stream';

let invoiceCount = 1;

// Create Invoice
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

// Get all invoices
export const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({ createdAt: -1 });
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch invoices", error: err });
  }
};

// Get invoice by ID
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

// Delete invoice
export const deleteInvoice = async (req, res) => {
  try {
    const deleted = await Invoice.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.json({ message: 'Invoice deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete invoice', error: err });
  }
};

// Update invoice
export const updateInvoice = async (req, res) => {
  try {
    const updated = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update invoice', error: err });
  }
};

// Export invoices to CSV
export const exportInvoicesCSV = async (req, res) => {
  try {
    const invoices = await Invoice.find();

    const fields = ['invoiceNumber', 'clientName', 'totalAmount', 'createdAt'];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(invoices);

    res.header("Content-Type", "text/csv");
    res.attachment("invoices.csv");
    return res.send(csv);
  } catch (err) {
    res.status(500).json({ message: 'Failed to export CSV', error: err });
  }
};

// Export invoices to PDF
export const exportInvoicesPDF = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    const doc = new PDFDocument();
    const stream = new Readable().wrap(doc);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="invoices.pdf"');
    stream.pipe(res);

    doc.fontSize(18).text("All Invoices", { align: 'center' }).moveDown();

    invoices.forEach((inv, i) => {
      doc
        .fontSize(12)
        .text(`Invoice #${inv.invoiceNumber}`, { underline: true })
        .text(`Client: ${inv.clientName}`)
        .text(`Total: PKR ${inv.totalAmount}`)
        .text(`Date: ${new Date(inv.createdAt).toLocaleDateString()}`)
        .moveDown();
    });

    doc.end();
  } catch (err) {
    res.status(500).json({ message: 'Failed to export PDF', error: err });
  }
};
