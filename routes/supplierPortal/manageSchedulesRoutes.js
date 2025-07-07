const express = require("express");
const router = express.Router();
const {
  addSchedule,
  getSchedules,
  updateSchedule,
  deleteSchedule
} = require("../../controllers/supplierPortal/manageSchedulesController");

router.post("/", addSchedule);
router.get("/", getSchedules);
router.put("/:id", updateSchedule);
router.delete("/:id", deleteSchedule);

module.exports = router;
