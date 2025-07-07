const ASN = require("../../models/supplierPortal/ASN");

exports.createASN = async (req, res) => {
  try {
    const asn = new ASN(req.body);
    await asn.save();
    res.status(201).json(asn);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getASNs = async (req, res) => {
  try {
    const asns = await ASN.find().sort({ createdAt: -1 });
    res.json(asns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
