import express from "express";
import {
  createInvoice,
  getInvoiceById
} from "../controllers/createInvoice.js"; // ✅ Correct filename here

const router = express.Router();

// POST: Create new invoice
router.post("/", createInvoice);

// GET: Get invoice by ID
router.get("/:id", getInvoiceById);

export default router;
