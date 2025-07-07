const express = require("express");
const router = express.Router();
const {
  createInvoiceNoPo,
  getInvoicesNoPo,
  updateInvoiceNoPo,
  deleteInvoiceNoPo
} = require("../../controllers/supplierPortal/createInvoiceNoPoController");

router.post("/", createInvoiceNoPo);
router.get("/", getInvoicesNoPo);
router.put("/:id", updateInvoiceNoPo);
router.delete("/:id", deleteInvoiceNoPo);

module.exports = router;
