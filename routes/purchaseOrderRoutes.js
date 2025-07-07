const express = require("express");
const router = express.Router();
const {
  addPurchaseOrder,
  getPurchaseOrders,
  updatePurchaseOrder,
  deletePurchaseOrder,
} = require("../controllers/purchaseOrderController");

router.post("/", addPurchaseOrder);
router.get("/", getPurchaseOrders);
router.put("/:id", updatePurchaseOrder);
router.delete("/:id", deletePurchaseOrder);

export default router;

