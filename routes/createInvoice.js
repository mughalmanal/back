import express from "express";
import { createInvoice } from "../controllers/createInvoiceController";

const router = express.Router();

// POST: Create a new invoice
router.post("/", createInvoice);

export default router;
