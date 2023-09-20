console.log('jspdfFramework Js is running...');

// Function to print text on a PDF
export function printText(pdf, x, y, text, isBold = false, fontSize = 6) {
    pdf.setFontSize(fontSize);

    if (isBold) {
        pdf.setFontStyle('bold');
    } else {
        pdf.setFontStyle('normal');
    }

    pdf.text(x, y, text);
}


// Function to create a cell
export function createCell(doc, x, y, width = 3.63, height = 1) {
    doc.setLineWidth(1 / 72);
    doc.rect(x, y, width, height);
}

// Function to creates a border
export function createBorder(doc) {
    doc.setDrawColor('black');
    //  72 points in 1 inch
    doc.setLineWidth(0.8 / 72);
    // doc.line(starting-x, starting-y, ending-x, ending-y);
    doc.line(0.5, 0.5, 0.5, 11.25);
    doc.line(7.75, 0.5, 7.75, 11.25);
    doc.line(0.5, 0.5, 7.75, 0.5);
    doc.line(0.5, 11.25, 7.75, 11.25);

}

export function longText(doc, theLongText, x, y, marginbreak, fontsize = 6, isBold = false) {
    let textlines = doc.setFont('helvetica', isBold ? 'bold' : 'normal') // Set the font weight to bold if isBold is true
        .setFontSize(fontsize)
        .splitTextToSize(theLongText, marginbreak);

    let verticalOffset = y;
    doc.text(x, verticalOffset + 12 / 72, textlines, {
        maxWidth: marginbreak,
        align: 'justify'
    });
    verticalOffset += (textlines.length + 0.5) * 12 / 72;
}

export function drawLine(doc, x1, y1, x2, y2) {
    doc.line(x1, y1, x2, y2, {
        lineWidth: 1,
        stroke: 'black'
    });
}