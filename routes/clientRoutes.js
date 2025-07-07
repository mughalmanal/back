const express = require("express");
const router = express.Router();
const {
  addClient,
  getClients,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

// CRUD Routes
router.post("/", addClient);
router.get("/", getClients);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

export default router;

