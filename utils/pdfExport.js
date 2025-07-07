const PDFDocument = require("pdfkit");

function exportToPDF(res, title = "Export", data = []) {
  const doc = new PDFDocument();
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename=${title}.pdf`);
  doc.pipe(res);

  doc.fontSize(20).text(title, { align: "center" }).moveDown();

  data.forEach((item, index) => {
    doc.fontSize(12).text(`${index + 1}.`);
    Object.entries(item).forEach(([key, value]) => {
      doc.text(`   ${key}: ${value}`);
    });
    doc.moveDown();
  });

  doc.end();
}

module.exports = exportToPDF;
