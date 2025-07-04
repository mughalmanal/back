const express = require("express");
const mongoose = require("mongoose");
const app = express();

// ✅ Manual CORS Middleware
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

// ✅ Routes
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/stockin", require("./routes/stockinRoutes"));
app.use("/api/stockout", require("./routes/stockoutRoutes"));
app.use("/api/vendors", require("./routes/vendormanagementRoutes"));
app.use("/api/purchaseorders", require("./routes/purchaseorderRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));
app.use("/api/invoices", require("./routes/invoiceRoutes"));
app.use("/api/paymententries", require("./routes/paymententrieRoutes"));
app.use("/api/supplierportal/orders", require("./routes/orderRoutes"));
app.use("/api/supplierportal/agreements", require("./routes/agreementRoutes"));
app.use("/api/supplierportal/inventory", require("./routes/inventoryRoutes"));
app.use("/api/supplierportal/invoicespayments", require("./routes/invoicespaymentRoutes"));
app.use("/api/supplierportal/shipments", require("./routes/shipmentRoutes"));
app.use("/api/supplierportal/profile", require("./routes/profileRoutes"));

// ✅ MongoDB
mongoose
  .connect("mongodb+srv://mughlu16029:mushi@cluster0.t1tgyhk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
