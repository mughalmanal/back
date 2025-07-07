const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => {
  console.error("❌ MongoDB connection failed:", err);
  process.exit(1);
});

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 ASIF AND BROTHERS API is running");
});

// ERP Routes
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

// Supplier Portal Routes (based on your actual files)
app.use("/api/supplier/manage-orders", require("./routes/supplierPortal/manageOrdersRoutes"));
app.use("/api/supplier/manage-schedules", require("./routes/supplierPortal/manageSchedulesRoutes"));
app.use("/api/supplier/acknowledge-schedules", require("./routes/supplierPortal/acknowledgeSchedulesRoutes"));
app.use("/api/supplier/orders-view", require("./routes/supplierPortal/ordersViewRoutes"));
app.use("/api/supplier/agreements", require("./routes/supplierPortal/agreementsRoutes"));
app.use("/api/supplier/create-asn", require("./routes/supplierPortal/createASNRoutes"));
app.use("/api/supplier/create-asbn", require("./routes/supplierPortal/createASBNRoutes"));
app.use("/api/supplier/upload-asn", require("./routes/supplierPortal/uploadASNRoutes"));
app.use("/api/supplier/manage-shipments", require("./routes/supplierPortal/manageShipmentsRoutes"));
app.use("/api/supplier/view-receipts", require("./routes/supplierPortal/viewReceiptsRoutes"));
app.use("/api/supplier/returns", require("./routes/supplierPortal/returnsRoutes"));
app.use("/api/supplier/create-invoice", require("./routes/supplierPortal/createInvoiceRoutes"));
app.use("/api/supplier/create-invoice-nopo", require("./routes/supplierPortal/createInvoiceNoPoRoutes"));
app.use("/api/supplier/view-invoices", require("./routes/supplierPortal/viewInvoicesRoutes"));
app.use("/api/supplier/view-payments", require("./routes/supplierPortal/viewPaymentsRoutes"));
app.use("/api/supplier/review-consumption", require("./routes/supplierPortal/reviewConsumptionRoutes"));
app.use("/api/supplier/profile", require("./routes/supplierPortal/profileRoutes"));

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
