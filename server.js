const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Allowed frontend domains
const allowedOrigins = [
  "https://front-git-main-manals-projects-114395d1.vercel.app", // production (Vercel)
  "https://front-lake-two.vercel.app",                          // alternate deployment
  "http://localhost:3000"                                       // local development
];

// ✅ Enable CORS
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl, Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("❌ Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Allow preflight requests for all routes
app.options("*", cors());

app.use(express.json());

// ✅ Import Routes
const invoiceRoutes = require("./routes/invoiceRoutes");
const authRoutes = require("./routes/auth.route"); // Ensure this file exists

// ✅ Apply Routes
app.use("/api/invoices", invoiceRoutes);
app.use("/api/auth", authRoutes);

// ✅ Connect to MongoDB
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
