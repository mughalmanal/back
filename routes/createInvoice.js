import express from "express";
import {
  createInvoice,
  getInvoiceById
} from "../controllers/createInvoice.js";

const router = express.Router();

// ✅ Now it's /api/invoice/create
router.post("/create", createInvoice);

// Optional: Get invoice by ID (/api/invoice/:id)
router.get("/:id", getInvoiceById);

export default router;
