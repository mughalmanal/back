const express = require("express");
const router = express.Router();
const controller = require("../../controllers/SupplierPortal/createASNController");

router.post("/", controller.create);
router.get("/", controller.getAll);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;
