const express = require("express");
const router = express.Router();
const {
  createManageAgreements, getManageAgreements, updateManageAgreements, deleteManageAgreements
} = require("../controllers/ManageAgreementsController");

router.post("/", createManageAgreements);
router.get("/", getManageAgreements);
router.put("/:id", updateManageAgreements);
router.delete("/:id", deleteManageAgreements);

module.exports = router;
