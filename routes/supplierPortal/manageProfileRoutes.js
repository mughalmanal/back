const express = require("express");
const router = express.Router();
const {
  getProfile,
  updateProfile
} = require("../../controllers/supplierPortal/profileController");

router.get("/", getProfile);
router.put("/:id", updateProfile);

module.exports = router;
