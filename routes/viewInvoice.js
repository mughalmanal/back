import express from "express";
import {
  getInvoices,
  deleteInvoice,
  updateInvoice,
  exportInvoicesPDF,
  exportInvoicesCSV,
} from "../controllers/viewInvoiceController";

const router = express.Router();

// GET: All invoices
router.get("/", getInvoices);

// DELETE: Delete an invoice
router.delete("/:id", deleteInvoice);

// PUT: Update an invoice
router.put("/:id", updateInvoice);

// Export PDF
router.get("/export/pdf", exportInvoicesPDF);

// Export CSV
router.get("/export/csv", exportInvoicesCSV);

export default router;
