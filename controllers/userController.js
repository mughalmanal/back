// controllers/userController.js

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Dummy Login (replace with real DB logic or JWT as needed)
    if (email === "asifandbrothers@gmail.com" && password === "rizwan123") {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
