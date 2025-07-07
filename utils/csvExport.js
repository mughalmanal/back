const { Parser } = require("json2csv");

function exportToCSV(data, fields = []) {
  try {
    const opts = { fields };
    const parser = new Parser(opts);
    const csv = parser.parse(data);
    return csv;
  } catch (err) {
    throw new Error("Failed to export CSV: " + err.message);
  }
}

module.exports = exportToCSV;
