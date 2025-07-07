const express = require("express");
const router = express.Router();
const {
  createSupplierInvoice,
  getSupplierInvoices,
  deleteSupplierInvoice
} = require("../../controllers/supplierPortal/supplierInvoicesController");

router.post("/", createSupplierInvoice);
router.get("/", getSupplierInvoices);
router.delete("/:id", deleteSupplierInvoice);

module.exports = router;
