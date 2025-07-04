const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Inventory", InventorySchema);
