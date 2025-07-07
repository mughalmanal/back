// viewInvoicesController.js
const SupplierInvoice = require("../../models/supplierPortal/SupplierInvoice");

exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await SupplierInvoice.find().sort({ createdAt: -1 });
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
