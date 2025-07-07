const express = require("express");
const router = express.Router();
const {
  createReturn,
  getReturns,
  updateReturn,
  deleteReturn
} = require("../../controllers/supplierPortal/returnsController");

router.post("/", createReturn);
router.get("/", getReturns);
router.put("/:id", updateReturn);
router.delete("/:id", deleteReturn);

module.exports = router;
