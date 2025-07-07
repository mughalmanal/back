const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: String,
  email: String,
  address: String,
  type: { type: String, default: "Retail" },
  cnic: String,
  products: [
    {
      name: String,
      price: Number,
      quantity: Number,
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model("Client", clientSchema);
