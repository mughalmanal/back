const express = require("express");
const router = express.Router();

// Dummy login route (can replace with DB logic later)
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "asifandbrothers@gmail.com" && password === "rizwan123") {
    return res.json({
      token: "fake-jwt-token", // use real JWT later
      message: "Login successful",
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
