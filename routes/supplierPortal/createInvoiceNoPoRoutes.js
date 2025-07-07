const express = require("express");
const router = express.Router();
const {
  createCreateInvoiceNoPo, getCreateInvoiceNoPo, updateCreateInvoiceNoPo, deleteCreateInvoiceNoPo
} = require("../controllers/CreateInvoiceNoPoController");

router.post("/", createCreateInvoiceNoPo);
router.get("/", getCreateInvoiceNoPo);
router.put("/:id", updateCreateInvoiceNoPo);
router.delete("/:id", deleteCreateInvoiceNoPo);

module.exports = router;
