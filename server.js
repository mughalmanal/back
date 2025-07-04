const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// CORS setup
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

  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.use(express.json());

// Routes config: adjust filenames here exactly as your files are named
const routes = [
  { path: "/api/clients", file: "./routes/clientRoutes" },
  { path: "/api/vendors", file: "./routes/vendormanagementRoutes" },
  { path: "/api/products", file: "./routes/productRoutes" },
  { path: "/api/stockin", file: "./routes/stockinRoutes" },
  { path: "/api/stockout", file: "./routes/stockoutRoutes" },
  { path: "/api/invoices", file: "./routes/invoiceRoutes" },
  { path: "/api/purchaseorders", file: "./routes/purchaseorderRoutes" },
  { path: "/api/payments", file: "./routes/paymententrieRoutes" },
  { path: "/api/reports", file: "./routes/reportRoutes" },
  { path: "/api/auth", file: "./routes/auth.route" },
  { path: "/api/orders", file: "./routes/orderRoutes" },
  { path: "/api/inventory", file: "./routes/inventoryRoutes" },
  { path: "/api/agreements", file: "./routes/agreementRoutes" },
  { path: "/api/profile", file: "./routes/profileRoutes" },
  { path: "/api/invoicespayments", file: "./routes/invoicespaymentRoutes" },
  { path: "/api/shipments", file: "./routes/shipmentRoutes" },
];

// Load all routes
routes.forEach(({ path, file }) => {
  try {
    const router = require(file);
    if (!router) throw new Error(`No router exported from ${file}`);
    app.use(path, router);
    console.log(`Mounted route ${path} -> ${file}`);
  } catch (err) {
    console.error(`Failed to load route ${file}:`, err.message);
  }
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
