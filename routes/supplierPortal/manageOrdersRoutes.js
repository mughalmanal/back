const express = require("express");
const router = express.Router();

const {
  createManageOrders,
  getManageOrders,
  updateManageOrders,
  deleteManageOrders,
} = require("../../controllers/SupplierPortal/manageOrdersController"); // ✅ Correct path

// Routes
router.post("/", createManageOrders);
router.get("/", getManageOrders);
router.put("/:id", updateManageOrders);
router.delete("/:id", deleteManageOrders);

module.exports = router;
