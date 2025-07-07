const mongoose = require("mongoose");

const manageAgreementsSchema = new mongoose.Schema({
  agreementNumber: { type: String, required: true },
  supplier: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  documentUrl: { type: String },
  status: {
    type: String,
    enum: ["Active", "Expired"],
    default: "Active",
  },
}, { timestamps: true });

module.exports = mongoose.model("ManageAgreements", manageAgreementsSchema);
