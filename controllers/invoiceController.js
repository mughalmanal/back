import Invoice from '../models/invoiceModel.js';
import { Parser } from 'json2csv';
import PDFDocument from 'pdfkit';
import path from 'path';

// Create
export const createInvoice = async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    await newInvoice.save();
    res.status(201).json({ message: 'Invoice created', invoice: newInvoice });
  } catch (error) {
    res.status(500).json({ error: 'Error creating invoice' });
  }
};

// Read
export const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({ date: -1 });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching invoices' });
  }
};

// Update
export const updateInvoice = async (req, res) => {
  try {
    const updated = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error updating invoice' });
  }
};

// Delete
export const deleteInvoice = async (req, res) => {
  try {
    await Invoice.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Invoice deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting invoice' });
  }
};

// Export to CSV
export const exportInvoicesToCSV = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    const fields = ['invoiceNumber', 'clientName', 'date', 'totalAmount', 'status'];
    const parser = new Parser({ fields });
    const csv = parser.parse(invoices);
    res.header('Content-Type', 'text/csv');
    res.attachment('invoices.csv');
    return res.send(csv);
  } catch (error) {
    res.status(500).json({ error: 'CSV export failed' });
  }
};

// Export to PDF
export const exportInvoicesToPDF = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    const doc = new PDFDocument();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=invoices.pdf');

    doc.pipe(res);

    doc.fontSize(20).text('Invoices Report', { align: 'center' });
    doc.moveDown();

    invoices.forEach(inv => {
      doc
        .fontSize(12)
        .text(`Invoice #: ${inv.invoiceNumber} | Client: ${inv.clientName} | Total: PKR ${inv.totalAmount} | Date: ${inv.date.toISOString().slice(0, 10)}`);
      doc.moveDown(0.5);
    });

    doc.end();
  } catch (error) {
    res.status(500).json({ error: 'PDF export failed' });
  }
};

// Print (HTML response)
export const getPrintableInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) return res.status(404).send('Invoice not found');

    const html = `
      <html>
      <head><title>Print Invoice</title></head>
      <body>
        <h1>Invoice: ${invoice.invoiceNumber}</h1>
        <p>Client: ${invoice.clientName}</p>
        <p>Date: ${invoice.date.toISOString().slice(0, 10)}</p>
        <p>Status: ${invoice.status}</p>
        <h3>Items:</h3>
        <ul>
          ${invoice.items.map(item => `<li>${item.description} - ${item.quantity} x ${item.unitPrice} = ${item.total}</li>`).join('')}
        </ul>
        <h3>Total: PKR ${invoice.totalAmount}</h3>
      </body>
      </html>
    `;
    res.send(html);
  } catch (error) {
    res.status(500).send('Error printing invoice');
  }
};
