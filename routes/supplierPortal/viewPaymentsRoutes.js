const express = require("express");
const router = express.Router();
const {
  createViewPayments, getViewPayments, updateViewPayments, deleteViewPayments
} = require("../controllers/ViewPaymentsController");

router.post("/", createViewPayments);
router.get("/", getViewPayments);
router.put("/:id", updateViewPayments);
router.delete("/:id", deleteViewPayments);

module.exports = router;
