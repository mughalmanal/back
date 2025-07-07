const SupplierInvoiceNoPo = require("../../models/supplierPortal/SupplierInvoiceNoPo");

exports.createNoPoInvoice = async (req, res) => {
  try {
    const invoice = new SupplierInvoiceNoPo(req.body);
    await invoice.save();
    res.status(201).json(invoice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getNoPoInvoices = async (req, res) => {
  try {
    const invoices = await SupplierInvoiceNoPo.find().sort({ createdAt: -1 });
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
