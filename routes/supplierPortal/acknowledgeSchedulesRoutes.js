const express = require("express");
const router = express.Router();
const {
  createAcknowledgeSchedules, getAcknowledgeSchedules, updateAcknowledgeSchedules, deleteAcknowledgeSchedules
} = require("../controllers/AcknowledgeSchedulesController");

router.post("/", createAcknowledgeSchedules);
router.get("/", getAcknowledgeSchedules);
router.put("/:id", updateAcknowledgeSchedules);
router.delete("/:id", deleteAcknowledgeSchedules);

module.exports = router;
