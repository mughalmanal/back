const express = require("express");
const router = express.Router();
const {
  uploadAgreement,
  getAgreements,
  deleteAgreement,
  updateAgreement
} = require("../../controllers/supplierPortal/agreementsController");

router.post("/", uploadAgreement);
router.get("/", getAgreements);
router.put("/:id", updateAgreement);
router.delete("/:id", deleteAgreement);

module.exports = router;
