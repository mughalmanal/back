import express from "express";
import {
  getAllInvoices,
  updateInvoice,
  deleteInvoice,
  exportInvoicesToCSV,
  exportInvoicesToPDF,
  printInvoice
} from "../../controllers/invoice/viewInvoiceController.js";

const router = express.Router();

router.get("/", getAllInvoices);
router.put("/:id", updateInvoice);
router.delete("/:id", deleteInvoice);
router.get("/export/csv", exportInvoicesToCSV);
router.get("/export/pdf", exportInvoicesToPDF);
router.get("/print/:id", printInvoice);

export default router;
