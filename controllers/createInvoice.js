const Invoice = require("../models/Invoice");
const { Parser } = require("json2csv");
const PDFDocument = require("pdfkit");

// ➕ Add Invoice
exports.addInvoice = async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json(invoice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 📃 Get All Invoices
exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({ createdAt: -1 });
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📝 Update Invoice
exports.updateInvoice = async (req, res) => {
  try {
    const updated = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ❌ Delete Invoice
exports.deleteInvoice = async (req, res) => {
  try {
    await Invoice.findByIdAndDelete(req.params.id);
    res.json({ message: "Invoice deleted." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📤 Export to CSV
exports.exportToCSV = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    const fields = ["invoiceNumber", "clientName", "clientEmail", "date", "dueDate", "totalAmount", "status"];
    const parser = new Parser({ fields });
    const csv = parser.parse(invoices);

    res.header("Content-Type", "text/csv");
    res.attachment("invoices.csv");
    return res.send(csv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🖨 Export for Print
exports.exportToPrint = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json({ printData: invoices });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🧾 Export to PDF
exports.exportToPDF = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    const doc = new PDFDocument();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=invoices.pdf");

    doc.pipe(res);
    doc.fontSize(20).text("Invoices List", { align: "center" }).moveDown();

    invoices.forEach((inv, index) => {
      doc.fontSize(12).text(`${index + 1}. Invoice #: ${inv.invoiceNumber}`);
      doc.text(`   Client: ${inv.clientName}`);
      doc.text(`   Email: ${inv.clientEmail}`);
      doc.text(`   Date: ${new Date(inv.date).toLocaleDateString()}`);
      doc.text(`   Due Date: ${new Date(inv.dueDate).toLocaleDateString()}`);
      doc.text(`   Total: Rs. ${inv.totalAmount}`);
      doc.text(`   Status: ${inv.status}`);
      doc.moveDown();
    });

    doc.end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
