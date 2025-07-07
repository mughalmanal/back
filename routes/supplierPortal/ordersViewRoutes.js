const express = require("express");
const router = express.Router();
const {
  createOrdersView, getOrdersView, updateOrdersView, deleteOrdersView
} = require("../controllers/OrdersViewController");

router.post("/", createOrdersView);
router.get("/", getOrdersView);
router.put("/:id", updateOrdersView);
router.delete("/:id", deleteOrdersView);

module.exports = router;
