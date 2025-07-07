const express = require("express");
const router = express.Router();
const {
  createManageProfile, getManageProfile, updateManageProfile, deleteManageProfile
} = require("../controllers/ManageProfileController");

router.post("/", createManageProfile);
router.get("/", getManageProfile);
router.put("/:id", updateManageProfile);
router.delete("/:id", deleteManageProfile);

module.exports = router;
