const express = require("express");
const router = express.Router();
const {
  createSupplierPayment,
  getSupplierPayments,
  deleteSupplierPayment
} = require("../../controllers/supplierPortal/paymentsController");

router.post("/", createSupplierPayment);
router.get("/", getSupplierPayments);
router.delete("/:id", deleteSupplierPayment);

module.exports = router;
