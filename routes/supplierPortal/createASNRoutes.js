const express = require("express");
const router = express.Router();
const {
  createCreateASN, getCreateASN, updateCreateASN, deleteCreateASN
} = require("../controllers/CreateASNController");

router.post("/", createCreateASN);
router.get("/", getCreateASN);
router.put("/:id", updateCreateASN);
router.delete("/:id", deleteCreateASN);

module.exports = router;
