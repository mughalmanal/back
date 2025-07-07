import express from "express";
import {
  getAllInvoices,
  deleteInvoice,
  updateInvoice,
  exportInvoicesPDF,
  exportInvoicesCSV,
} from "../controllers/createInvoice.js";

const router = express.Router();

router.get("/", getAllInvoices);
router.delete("/:id", deleteInvoice);
router.put("/:id", updateInvoice);
router.get("/export/pdf", exportInvoicesPDF);
router.get("/export/csv", exportInvoicesCSV);

export default router; // ✅ This line is crucial!
