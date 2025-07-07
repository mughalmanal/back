import Invoice from "../models/invoiceModel.js";

function generateNextInvoiceNumber(lastNumber) {
  if (!lastNumber) return "INV-0001";
  const num = parseInt(lastNumber.replace("INV-", "")) + 1;
  return `INV-${String(num).padStart(4, "0")}`;
}

export const createInvoice = async (req, res) => {
  try {
    const lastInvoice = await Invoice.findOne().sort({ createdAt: -1 });

    const nextInvoiceNumber = generateNextInvoiceNumber(
      lastInvoice?.invoiceNumber
    );

    const newInvoice = new Invoice({
      ...req.body,
      invoiceNumber: nextInvoiceNumber,
    });

    await newInvoice.save();
    res.status(201).json({ message: "✅ Invoice created", invoice: newInvoice });
  } catch (error) {
    console.error("❌ Error creating invoice:", error);
    res.status(500).json({ error: "Failed to create invoice" });
  }
};
