const express = require("express");
const router = express.Router();
const {
  getAllOrderViews
} = require("../../controllers/supplierPortal/ordersViewController");

router.get("/", getAllOrderViews);

module.exports = router;
