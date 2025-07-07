const express = require("express");
const router = express.Router();
const {
  createCreateInvoice, getCreateInvoice, updateCreateInvoice, deleteCreateInvoice
} = require("../controllers/CreateInvoiceController");

router.post("/", createCreateInvoice);
router.get("/", getCreateInvoice);
router.put("/:id", updateCreateInvoice);
router.delete("/:id", deleteCreateInvoice);

module.exports = router;
