const express = require("express");
const router = express.Router();
const {
  getReceipts
} = require("../../controllers/supplierPortal/viewReceiptsController");

router.get("/", getReceipts);

module.exports = router;
