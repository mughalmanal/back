const express = require("express");
const router = express.Router();
const {
  createASBN,
  getASBNs,
  updateASBN,
  deleteASBN
} = require("../../controllers/supplierPortal/createASBNController");

router.post("/", createASBN);
router.get("/", getASBNs);
router.put("/:id", updateASBN);
router.delete("/:id", deleteASBN);

module.exports = router;
