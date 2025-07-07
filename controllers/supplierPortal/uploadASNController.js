const UploadedASN = require("../../models/supplierPortal/UploadedASN");

exports.uploadASNFile = async (req, res) => {
  try {
    const { fileName, fileUrl } = req.body;
    const newFile = new UploadedASN({ fileName, fileUrl });
    await newFile.save();
    res.status(201).json(newFile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUploadedASNs = async (req, res) => {
  try {
    const files = await UploadedASN.find().sort({ uploadedAt: -1 });
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
