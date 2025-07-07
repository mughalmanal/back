const express = require("express");
const router = express.Router();

const {
  addPayment,
  getPayments,
  updatePayment,
  deletePayment
} = require("../controllers/paymentEntryController");

router.post("/", addPayment);
router.get("/", getPayments);
router.put("/:id", updatePayment);
router.delete("/:id", deletePayment);

module.exports = router;
