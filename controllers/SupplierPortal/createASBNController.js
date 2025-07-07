const CreateASBN = require("../../models/supplierPortal/CreateASBN");

exports.create = async (req, res) => {
  try {
    const newRecord = new CreateASBN(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ message: "Error creating ASBN", error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const records = await CreateASBN.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ASBNs", error });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await CreateASBN.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating ASBN", error });
  }
};

exports.remove = async (req, res) => {
  try {
    await CreateASBN.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "ASBN deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting ASBN", error });
  }
};
