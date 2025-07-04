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
    "http://localhost:3000"
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());

// Routes imports
const invoiceRoutes = require("./routes/invoiceRoutes");
const authRoutes = require("./routes/auth.route");
const stockInRoutes = require("./routes/stockinRoutes");
const stockOutRoutes = require("./routes/stockoutRoutes");
const clientRoutes = require("./routes/clientRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const productRoutes = require("./routes/productRoutes");
const purchaseOrderRoutes = require("./routes/purchaseOrderRoutes");
const paymentEntryRoutes = require("./routes/paymentEntryRoutes");
const reportRoutes = require("./routes/reportRoutes");

// Use routes
app.use("/api/invoices", invoiceRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/stockin", stockInRoutes);
app.use("/api/stockout", stockOutRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/products", productRoutes);
app.use("/api/purchaseorders", purchaseOrderRoutes);
app.use("/api/paymententries", paymentEntryRoutes);
app.use("/api/reports", reportRoutes);

// MongoDB connection
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
