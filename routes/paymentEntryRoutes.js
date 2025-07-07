const express = require("express");
const router = express.Router();

const {
  addPayment,
  getPayments,
  updatePayment,
  deletePayment,
} = require("../controllers/paymentEntryController"); // ✅ make sure this path is correct

// ✅ Define the routes
router.post("/", addPayment);
router.get("/", getPayments);
router.put("/:id", updatePayment); // ✅ update route
router.delete("/:id", deletePayment);

module.exports = router;
