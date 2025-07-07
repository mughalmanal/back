const express = require("express");
const router = express.Router();
const {
  createViewInvoices, getViewInvoices, updateViewInvoices, deleteViewInvoices
} = require("../controllers/ViewInvoicesController");

router.post("/", createViewInvoices);
router.get("/", getViewInvoices);
router.put("/:id", updateViewInvoices);
router.delete("/:id", deleteViewInvoices);

module.exports = router;
