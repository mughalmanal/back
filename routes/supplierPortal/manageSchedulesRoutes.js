const express = require("express");
const router = express.Router();
const {
  createManageSchedules, getManageSchedules, updateManageSchedules, deleteManageSchedules
} = require("../controllers/manageSchedulesController");

router.post("/", createManageSchedules);
router.get("/", getManageSchedules);
router.put("/:id", updateManageSchedules);
router.delete("/:id", deleteManageSchedules);

module.exports = router;
