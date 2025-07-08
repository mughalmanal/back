const Client = require("../models/Client");
const { Parser } = require("json2csv");
const PDFDocument = require("pdfkit");

// ➕ Add Client
exports.addClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 📃 Get All Clients
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📝 Update Client
exports.updateClient = async (req, res) => {
  try {
    const updated = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ❌ Delete Client
exports.deleteClient = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: "Client deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📤 Export to CSV
exports.exportToCSV = async (req, res) => {
  try {
    const clients = await Client.find();
    const fields = ["name", "phone", "email", "address", "type", "cnic", "productBought", "price"];
    const parser = new Parser({ fields });
    const csv = parser.parse(clients);

    res.header("Content-Type", "text/csv");
    res.attachment("clients.csv");
    return res.send(csv);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🖨 Export to Print JSON
exports.exportToPrint = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json({ printData: clients });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🧾 Export to PDF
exports.exportToPDF = async (req, res) => {
  try {
    const clients = await Client.find();
    const doc = new PDFDocument();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=clients.pdf");

    doc.pipe(res);
    doc.fontSize(20).text("Clients List", { align: "center" });
    doc.moveDown();

    clients.forEach((client, index) => {
      doc.fontSize(12).text(`${index + 1}. Name: ${client.name}`);
      doc.text(`   Phone: ${client.phone}`);
      doc.text(`   Email: ${client.email}`);
      doc.text(`   Address: ${client.address}`);
      doc.text(`   Type: ${client.type}`);
      doc.text(`   CNIC: ${client.cnic}`);
      doc.text(`   Product Bought: ${client.productBought}`);
      doc.text(`   Price: Rs. ${client.price}`);
      doc.moveDown();
    });

    doc.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
