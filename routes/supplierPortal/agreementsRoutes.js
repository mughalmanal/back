const express = require("express");
const router = express.Router();
const agreementsController = require("../../controllers/SupplierPortal/manageAgreementsController");

// Create
router.post("/", agreementsController.create);

// Read all
router.get("/", agreementsController.getAll);

// Update
router.put("/:id", agreementsController.update);

// Delete
router.delete("/:id", agreementsController.remove);

export default router;

