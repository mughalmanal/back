const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ✅ Whitelisted frontend origins
const allowedOrigins = [
  "https://front-h6fw2530u-manals-projects-114395d1.vercel.app",
  "https://front-lake-two.vercel.app",
  "https://front-git-main-manals-projects-114395d1.vercel.app",
  "https://front-manals-projects-114395d1.vercel.app",
  "http://localhost:3000"
];

// ✅ CORS Middleware
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());

// ✅ Import and Use Routes
const invoiceRoutes = require("./routes/invoiceRoutes");
const authRoutes = require("./routes/auth.route"); // Make sure this file exists

app.use("/api/invoices", invoiceRoutes);
app.use("/api/auth", authRoutes);

// ✅ MongoDB Connection
mongoose
  .connect("mongodb+srv://mughlu16029:mushi@cluster0.t1tgyhk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
