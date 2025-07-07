const express = require("express");
const router = express.Router();
const {
  generateReport,
  getReports
} = require("../controllers/reportController");

// GET all reports
router.get("/", getReports);

// POST a new report
router.post("/", generateReport);

module.exports = router;
