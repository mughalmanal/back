const express = require("express");
const router = express.Router();
const {
  acknowledgeSchedule,
  getAcknowledged,
  updateAcknowledged,
  deleteAcknowledged
} = require("../../controllers/supplierPortal/acknowledgeSchedulesController");

router.post("/", acknowledgeSchedule);
router.get("/", getAcknowledged);
router.put("/:id", updateAcknowledged);
router.delete("/:id", deleteAcknowledged);

module.exports = router;
