import express from "express";
import { createInvoice } from "../../controllers/invoice/createInvoiceController.js";

const router = express.Router();

router.post("/", createInvoice);

export default router;
