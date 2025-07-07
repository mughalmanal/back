import Invoice from "../../models/invoiceModel.js";

export const createInvoice = async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    await newInvoice.save();
    res.status(201).json({ message: "✅ Invoice created", invoice: newInvoice });
  } catch (error) {
    console.error("❌ Error creating invoice:", error);
    res.status(500).json({ error: "Failed to create invoice" });
  }
};
