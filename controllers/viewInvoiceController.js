import Invoice from "../../models/invoiceModel.js";
import { Parser } from "json2csv";
import PDFDocument from "pdfkit";

// View All
export const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({ date: -1 });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch invoices" });
  }
};

// Update
export const updateInvoice = async (req, res) => {
  try {
    const updated = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update invoice" });
  }
};

// Delete
export const deleteInvoice = async (req, res) => {
  try {
    await Invoice.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Invoice deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete invoice" });
  }
};

// Export CSV
export const exportInvoicesToCSV = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    const fields = ["invoiceNumber", "clientName", "date", "totalAmount", "status"];
    const parser = new Parser({ fields });
    const csv = parser.parse(invoices);
    res.header("Content-Type", "text/csv");
    res.attachment("invoices.csv");
    res.send(csv);
  } catch (error) {
    res.status(500).json({ error: "CSV export failed" });
  }
};

// Export PDF
export const exportInvoicesToPDF = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=invoices.pdf");
    doc.pipe(res);
    doc.fontSize(18).text("Invoices Report", { align: "center" });
    doc.moveDown();
    invoices.forEach(inv => {
      doc.fontSize(12).text(
        `Invoice #${inv.invoiceNumber} - ${inv.clientName} - PKR ${inv.totalAmount} - ${inv.date.toISOString().split("T")[0]}`
      );
      doc.moveDown(0.5);
    });
    doc.end();
  } catch (error) {
    res.status(500).json({ error: "PDF export failed" });
  }
};

// Print Invoice (HTML)
export const printInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) return res.status(404).send("Invoice not found");
    const html = `
      <html>
        <body>
          <h1>Invoice #${invoice.invoiceNumber}</h1>
          <p><strong>Client:</strong> ${invoice.clientName}</p>
          <p><strong>Date:</strong> ${invoice.date.toISOString().split("T")[0]}</p>
          <p><strong>Status:</strong> ${invoice.status}</p>
          <h3>Items:</h3>
          <ul>
            ${invoice.items.map(i => `<li>${i.description} - ${i.quantity} x ${i.unitPrice} = ${i.total}</li>`).join("")}
          </ul>
          <h2>Total: PKR ${invoice.totalAmount}</h2>
        </body>
      </html>
    `;
    res.send(html);
  } catch (error) {
    res.status(500).send("Failed to generate print invoice");
  }
};
