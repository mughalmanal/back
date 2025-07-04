const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();

// ✅ Allowed frontend URLs (Vercel + Localhost)
const allowedOrigins = [
  "https://front-h6fw2530u-manals-projects-114395d1.vercel.app",
  "https://front-lake-two.vercel.app",
  "https://front-git-main-manals-projects-114395d1.vercel.app",
  "https://front-manals-projects-114395d1.vercel.app",
  "http://localhost:3000",
];

// ✅ CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("❌ Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Allow preflight requests
app.options("*", cors());

app.use(express.json());

// ✅ Import your routes
const invoiceRoutes = require("./routes/invoiceRoutes");
const authRoutes = require("./routes/auth.route");

// ✅ Use routes
app.use("/api/invoices", invoiceRoutes);
app.use("/api/auth", authRoutes);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
