const CreateASN = require("../../models/supplierPortal/CreateASN");

exports.create = async (req, res) => {
  try {
    const newRecord = new CreateASN(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ message: "Error creating ASN", error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const records = await CreateASN.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ASNs", error });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await CreateASN.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating ASN", error });
  }
};

exports.remove = async (req, res) => {
  try {
    await CreateASN.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "ASN deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting ASN", error });
  }
};
