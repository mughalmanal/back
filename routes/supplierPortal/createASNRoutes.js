const express = require("express");
const router = express.Router();
const {
  createASN,
  getASNs,
  updateASN,
  deleteASN
} = require("../../controllers/supplierPortal/createASNController");

router.post("/", createASN);
router.get("/", getASNs);
router.put("/:id", updateASN);
router.delete("/:id", deleteASN);

module.exports = router;
