const express = require("express");
const router = express.Router();
const {
  getConsumptionData
} = require("../../controllers/supplierPortal/reviewConsumptionController");

router.get("/", getConsumptionData);

module.exports = router;
