const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  email: { type: String },
  address: { type: String },
  type: { type: String, enum: ["Retail", "Wholesale"], default: "Retail" },
  cnic: { type: String },
  productBought: { type: String },
  price: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model("Client", clientSchema);
