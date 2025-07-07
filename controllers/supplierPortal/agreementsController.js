const Agreement = require("../../models/supplierPortal/Agreement");

exports.createAgreement = async (req, res) => {
  try {
    const agreement = new Agreement(req.body);
    await agreement.save();
    res.status(201).json(agreement);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAgreements = async (req, res) => {
  try {
    const agreements = await Agreement.find().sort({ createdAt: -1 });
    res.json(agreements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAgreement = async (req, res) => {
  try {
    const updated = await Agreement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAgreement = async (req, res) => {
  try {
    await Agreement.findByIdAndDelete(req.params.id);
    res.json({ message: "Agreement deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
