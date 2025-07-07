const express = require("express");
const router = express.Router();
const {
  addStockIn,
  getStockIn,
  updateStockIn,
  deleteStockIn,
} = require("../controllers/stockInController");

router.post("/", addStockIn);
router.get("/", getStockIn);
router.put("/:id", updateStockIn);
router.delete("/:id", deleteStockIn);

export default router;

