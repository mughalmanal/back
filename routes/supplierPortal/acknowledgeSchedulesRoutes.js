const express = require("express");
const router = express.Router();
const controller = require("../../controllers/SupplierPortal/acknowledgeSchedulesController");

router.post("/", controller.create);
router.get("/", controller.getAll);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router; // ✅ Only in route files
