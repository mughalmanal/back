const express = require("express");
const router = express.Router();
const {
  createReturns, getReturns, updateReturns, deleteReturns
} = require("../controllers/ReturnsController");

router.post("/", createReturns);
router.get("/", getReturns);
router.put("/:id", updateReturns);
router.delete("/:id", deleteReturns);

module.exports = router;
