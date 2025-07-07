const SupplierProfile = require("../../models/supplierPortal/Profile");

exports.getProfile = async (req, res) => {
  try {
    const profile = await SupplierProfile.findOne();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const existing = await SupplierProfile.findOne();
    if (existing) {
      const updated = await SupplierProfile.findByIdAndUpdate(existing._id, req.body, { new: true });
      res.json(updated);
    } else {
      const newProfile = new SupplierProfile(req.body);
      await newProfile.save();
      res.status(201).json(newProfile);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
