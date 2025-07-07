const express = require("express");
const router = express.Router();
const {
  createManageShipments, getManageShipments, updateManageShipments, deleteManageShipments
} = require("../controllers/ManageShipmentsController");

router.post("/", createManageShipments);
router.get("/", getManageShipments);
router.put("/:id", updateManageShipments);
router.delete("/:id", deleteManageShipments);

module.exports = router;
