const UploadASN = require("../../models/supplierPortal/UploadASN");

exports.create = async (req, res) => {
  try {
    const newRecord = new UploadASN(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ message: "Error uploading ASN", error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const records = await UploadASN.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: "Error fetching uploaded ASNs", error });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await UploadASN.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating uploaded ASN", error });
  }
};

exports.remove = async (req, res) => {
  try {
    await UploadASN.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Uploaded ASN deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting uploaded ASN", error });
  }
};
