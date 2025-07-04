const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Manual CORS middleware
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://front-lake-two.vercel.app",
    "https://front-h6fw2530u-manals-projects-114395d1.vercel.app",
    "https://front-git-main-manals-projects-114395d1.vercel.app",
    "https://front-manals-projects-114395d1.vercel.app",
    "http://localhost:3000",
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
  }

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());

// Import routes with exact filenames (capital R, plural)
const authRoutes = require("./routes/authRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const stockInRoutes = require("./routes/stockinRoutes");
const stockOutRoutes = require("./routes/stockoutRoutes");
const productRoutes = require("./routes/productsRoutes");
const vendorRoutes = require("./routes/vendorsRoutes");
const clientRoutes = require("./routes/clientsRoutes");
const purchaseOrderRoutes = require("./routes/purchaseOrdersRoutes");
const paymentEntryRoutes = require("./routes/paymentEntriesRoutes");
const reportRoutes = require("./routes/reportsRoutes");

// Register routes
app.use("/api/auth", authRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/stock-in", stockInRoutes);
app.use("/api/stock-out", stockOutRoutes);
app.use("/api/products", productRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/purchase-orders", purchaseOrderRoutes);
app.use("/api/payment-entries", paymentEntryRoutes);
app.use("/api/reports", reportRoutes);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://mughlu16029:mushi@cluster0.t1tgyhk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
