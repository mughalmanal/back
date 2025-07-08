const express = require("express");
const router = express.Router();
const {
  addClient,
  getClients,
  updateClient,
  deleteClient,
  exportToCSV,
  exportToPrint,
  exportToPDF,
} = require("../controllers/clientController");

// ➕ Add a new client
router.post("/add", addClient);

// 📃 Get all clients
router.get("/", getClients);

// 📝 Update client by ID
router.put("/:id", updateClient);

// ❌ Delete client by ID
router.delete("/:id", deleteClient);

// 📤 Export all clients to CSV
router.get("/export/csv", exportToCSV);

// 🖨 Export all clients for print view
router.get("/export/print", exportToPrint);

// 🧾 Export all clients to PDF
router.get("/export/pdf", exportToPDF);

module.exports = router;
