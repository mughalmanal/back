const express = require("express");
const router = express.Router();
const {
  createViewReceipts, getViewReceipts, updateViewReceipts, deleteViewReceipts
} = require("../controllers/ViewReceiptsController");

router.post("/", createViewReceipts);
router.get("/", getViewReceipts);
router.put("/:id", updateViewReceipts);
router.delete("/:id", deleteViewReceipts);

module.exports = router;
