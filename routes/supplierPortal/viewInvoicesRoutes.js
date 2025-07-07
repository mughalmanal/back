const express = require("express");
const router = express.Router();
const {
  getAllInvoices
} = require("../../controllers/supplierPortal/viewInvoicesController");

router.get("/", getAllInvoices); // You can add filters or pagination here too

module.exports = router;
