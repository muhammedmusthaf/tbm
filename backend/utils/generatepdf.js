// utils/pdfGenerator.js
import PDFDocument from 'pdfkit';
import path from 'path';
import fs from 'fs';

export const generatePdfBuffer = (data) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50 });
    const buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      const pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });

    // === Header: Logo & Title ===
    const logoPath = path.resolve('assets/logo.png');
    if (fs.existsSync(logoPath)) {
      doc.image(logoPath, doc.page.width / 2 - 50, 30, { width: 100 }); // center
    }

    doc.moveDown(4);
    doc
      .fontSize(20)
      .fillColor('#000')
      .font('Helvetica-Bold')
      .text('TBM Transport Inquiry', {
        align: 'center',
     
      });

    doc.moveDown(2);

    // === Two-Column Styled Form Fields ===
    const fieldStyle = {
      labelFont: 'Helvetica-Bold',
      valueFont: 'Helvetica',
      labelSize: 11,
      valueSize: 11,
      labelColor: '#333',
      valueColor: '#000',
    };

    const entries = Object.entries(data);
    const half = Math.ceil(entries.length / 2);
    const column1 = entries.slice(0, half);
    const column2 = entries.slice(half);

    const leftX = 50;
    const rightX = doc.page.width / 2 + 10;
    let y = doc.y;

    const renderField = (x, y, label, value) => {
      doc
        .font(fieldStyle.labelFont)
        .fontSize(fieldStyle.labelSize)
        .fillColor(fieldStyle.labelColor)
        .text(`${label}:`, x, y, { continued: true });

      doc
        .font(fieldStyle.valueFont)
        .fontSize(fieldStyle.valueSize)
        .fillColor(fieldStyle.valueColor)
        .text(` ${value}`);
    };

    const rowHeight = 22;
    const rowCount = Math.max(column1.length, column2.length);

    for (let i = 0; i < rowCount; i++) {
      if (column1[i]) {
        renderField(leftX, y, column1[i][0], column1[i][1]);
      }
      if (column2[i]) {
        renderField(rightX, y, column2[i][0], column2[i][1]);
      }
      y += rowHeight;
    }

    doc.moveDown(3);

    // === Footer: Address ===
    doc
      .fontSize(10)
      .fillColor('gray')
      .text(
        'Tabassam Al Qasr, Kolavoor, Mangalore, Karnataka 574162',
        50,
        doc.page.height - 80,
        { align: 'center' }
      );

    doc.end();
  });
};
