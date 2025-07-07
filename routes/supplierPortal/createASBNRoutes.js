const express = require("express");
const router = express.Router();
const {
  createCreateASBN, getCreateASBN, updateCreateASBN, deleteCreateASBN
} = require("../controllers/CreateASBNController");

router.post("/", createCreateASBN);
router.get("/", getCreateASBN);
router.put("/:id", updateCreateASBN);
router.delete("/:id", deleteCreateASBN);

module.exports = router;
