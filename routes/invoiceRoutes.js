import express from 'express';
import {
  createInvoice,
  getAllInvoices,
  updateInvoice,
  deleteInvoice,
  exportInvoicesToCSV,
  exportInvoicesToPDF,
  getPrintableInvoice
} from '../controllers/invoiceController.js';

const router = express.Router();

// Main CRUD
router.post('/', createInvoice);
router.get('/', getAllInvoices);
router.put('/:id', updateInvoice);
router.delete('/:id', deleteInvoice);

// Export
router.get('/export/csv', exportInvoicesToCSV);
router.get('/export/pdf', exportInvoicesToPDF);

// Print
router.get('/print/:id', getPrintableInvoice);

export default router;
