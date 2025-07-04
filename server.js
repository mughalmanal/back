const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ✅ Manual CORS middleware (replace the need for 'cors' package)
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

// ✅ Routes
const invoiceRoutes = require("./routes/invoiceRoutes");
const authRoutes = require("./routes/auth.route");
app.use("/api/invoices", invoiceRoutes);
app.use("/api/auth", authRoutes);

// ✅ MongoDB
mongoose
  .connect("mongodb+srv://mughlu16029:mushi@cluster0.t1tgyhk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
