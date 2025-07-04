const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Profile", ProfileSchema);
