const express = require("express");
const router = express.Router();
const {
  addInvoice,
  getInvoices,
  updateInvoice,
  deleteInvoice,
  exportToCSV,
  exportToPrint,
  exportToPDF
} = require("../controllers/invoiceController");

// ➕ Add Invoice
router.post("/add", addInvoice);

// 📃 Get All Invoices
router.get("/", getInvoices);

// 📝 Update Invoice
router.put("/:id", updateInvoice);

// ❌ Delete Invoice
router.delete("/:id", deleteInvoice);

// 📤 Export to CSV
router.get("/export/csv", exportToCSV);

// 🖨 Export for Print
router.get("/export/print", exportToPrint);

// 🧾 Export to PDF
router.get("/export/pdf", exportToPDF);

module.exports = router;
