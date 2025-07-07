import Invoice from "../models/invoiceModel.js";
import PDFDocument from "pdfkit";
import { Parser } from "json2csv";

export const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({ createdAt: -1 });
    res.status(200).json(invoices);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch invoices", error: err });
  }
};

export const deleteInvoice = async (req, res) => {
  try {
    await Invoice.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Invoice deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err });
  }
};

export const updateInvoice = async (req, res) => {
  try {
    const updated = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err });
  }
};

export const exportInvoicesPDF = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    const doc = new PDFDocument();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=invoices.pdf");
    doc.pipe(res);

    doc.fontSize(20).text("Invoices Report", { align: "center" });
    doc.moveDown();

    invoices.forEach((inv) => {
      doc
        .fontSize(12)
        .text(`Invoice No: ${inv.invoiceNumber}`)
        .text(`Client: ${inv.clientName}`)
        .text(`Date: ${new Date(inv.createdAt).toLocaleDateString()}`)
        .text(`Total: Rs. ${inv.totalAmount}`)
        .moveDown();
    });

    doc.end();
  } catch (err) {
    res.status(500).json({ message: "PDF export failed", error: err });
  }
};

export const exportInvoicesCSV = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    const parser = new Parser();
    const csv = parser.parse(invoices);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=invoices.csv");
    res.status(200).end(csv);
  } catch (err) {
    res.status(500).json({ message: "CSV export failed", error: err });
  }
};
