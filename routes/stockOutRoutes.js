const express = require("express");
const router = express.Router();
const {
  addStockOut,
  getStockOut,
  updateStockOut,
  deleteStockOut,
} = require("../controllers/stockOutController");

router.post("/", addStockOut);
router.get("/", getStockOut);
router.put("/:id", updateStockOut);
router.delete("/:id", deleteStockOut);

module.exports = router;
