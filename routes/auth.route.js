const express = require("express");
const router = express.Router();

// Dummy login (replace with real DB logic)
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "asifandbrothers@gmail.com" && password === "rizwan123") {
    return res.json({ token: "fake-jwt-token", message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
