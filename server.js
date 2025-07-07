// server.js

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected to MongoDB");
})
.catch((err) => {
  console.error("❌ MongoDB connection failed:", err);
  process.exit(1);
});

// Test root route
app.get("/", (req, res) => {
  res.send("🚀 ASIF AND BROTHERS API is running");
});

// Routes
app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/vendors", require("./routes/vendorRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/stockin", require("./routes/stockInRoutes"));
app.use("/api/stockout", require("./routes/stockOutRoutes"));
app.use("/api/invoices", require("./routes/invoiceRoutes"));
app.use("/api/purchase-orders", require("./routes/purchaseOrderRoutes"));
app.use("/api/payments", require("./routes/paymentEntryRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));
app.use("/api/auth", require("./routes/userRoutes"));

// Supplier Portal Routes
app.use("/api/supplier/manage-orders", require("./routes/supplierPortal/manageOrdersRoutes"));
app.use("/api/supplier/manage-schedules", require("./routes/supplierPortal/manageSchedulesRoutes"));
app.use("/api/supplier/acknowledge-schedules", require("./routes/supplierPortal/acknowledgeSchedulesRoutes"));
app.use("/api/supplier/orders-view", require("./routes/supplierPortal/ordersViewRoutes"));
app.use("/api/supplier/agreements", require("./routes/supplierPortal/agreementsRoutes"));
app.use("/api/supplier/shipments", require("./routes/supplierPortal/manageShipmentsRoutes"));
app.use("/api/supplier/asn", require("./routes/supplierPortal/createASNRoutes"));
app.use("/api/supplier/asbn", require("./routes/supplierPortal/createASBNRoutes"));
app.use("/api/supplier/upload-asn", require("./routes/supplierPortal/uploadASNRoutes"));
app.use("/api/supplier/view-receipts", require("./routes/supplierPortal/viewReceiptsRoutes"));
app.use("/api/supplier/returns", require("./routes/supplierPortal/returnsRoutes"));
app.use("/api/supplier/invoices", require("./routes/supplierPortal/supplierInvoicesRoutes"));
app.use("/api/supplier/payments", require("./routes/supplierPortal/paymentsRoutes"));
app.use("/api/supplier/review-consumption", require("./routes/supplierPortal/reviewConsumptionRoutes"));
app.use("/api/supplier/profile", require("./routes/supplierPortal/profileRoutes"));

// Global error logging
process.on("uncaughtException", (err) => {
  console.error("🔥 Uncaught Exception:", err);
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
// Entry point - imports all routes and starts server
