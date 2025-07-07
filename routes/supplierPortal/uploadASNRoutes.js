const express = require("express");
const router = express.Router();
const {
  createUploadASN, getUploadASN, updateUploadASN, deleteUploadASN
} = require("../controllers/UploadASNController");

router.post("/", createUploadASN);
router.get("/", getUploadASN);
router.put("/:id", updateUploadASN);
router.delete("/:id", deleteUploadASN);

module.exports = router;
