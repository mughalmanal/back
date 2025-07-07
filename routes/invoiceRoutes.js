const express = require("express");
const router = express.Router();
const {
  addInvoice,
  getInvoices,
  updateInvoice,
  deleteInvoice,
} = require("../controllers/invoiceController");

router.post("/", addInvoice);
router.get("/", getInvoices);
router.put("/:id", updateInvoice);
router.delete("/:id", deleteInvoice);

module.exports = router;
