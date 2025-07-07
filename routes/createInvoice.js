import express from "express";
import {
  createInvoice,
  getInvoiceById
} from "../controllers/createInvoice.js";

const router = express.Router();

// ✅ Create invoice → POST /api/invoice/create
router.post("/create", createInvoice);

// ✅ Get invoice by ID → GET /api/invoice/id/:id
router.get("/id/:id", getInvoiceById);

export default router;
