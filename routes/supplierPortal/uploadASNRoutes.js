const express = require("express");
const router = express.Router();
const {
  uploadASN,
  getUploadedASNs,
  deleteUploadedASN
} = require("../../controllers/supplierPortal/uploadASNController");

router.post("/", uploadASN);
router.get("/", getUploadedASNs);
router.delete("/:id", deleteUploadedASN);

module.exports = router;
