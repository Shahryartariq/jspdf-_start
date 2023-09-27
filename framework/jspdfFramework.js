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
export function createCell(doc, x, y, width = 3.63, height = 1, fontsize = 1) {
    doc.setLineWidth(fontsize / 72);
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

export function longText(doc, theText, x, y, marginbreak, fontsize = 6, isBold = false, justify = true, fontName = 'helvetica') {

    let textlines = doc.setFont(fontName, isBold ? 'bold' : 'normal')
        .setFontSize(fontsize)
        .splitTextToSize(theText, marginbreak);

    let verticalOffset = y;

    let options = {
        maxWidth: marginbreak
    };

    if (justify) {
        options.align = 'justify';
    }

    doc.text(x, verticalOffset + 12 / 72, textlines, options);
    verticalOffset += (textlines.length + 0.5) * 12 / 72;
}


export function drawLine(doc, x1, y1, x2, y2, lineWidth = 1 / 72) {
    doc.setLineWidth(lineWidth); // Set the line width based on the parameter
    doc.setDrawColor(0, 0, 0); // Set the stroke color to black (RGB: 0, 0, 0)
    doc.line(x1, y1, x2, y2); // Draw the line
}

export function radioButtonpdf(
    pdf,
    x,
    y,
    radioSize,
    isSelected = false,
    weight = 0.05
) {
    // Create the radio button circle
    pdf.circle(x, y, radioSize);

    // If this option is selected, add a checkmark
    if (isSelected) {
        pdf.setLineWidth(weight);
        // pdf.line(x - radioSize, y, x + radioSize, y);
        // pdf.line(x, y - radioSize, x, y + radioSize);
        pdf.setFillColor(0, 0, 0);
        pdf.circle(x, y, radioSize / 2, "F");
    }
}

export function checkbox(pdf, x, y, length = 1, width = 1, checked = false) {
    pdf.setLineWidth(1 / 72);
    pdf.rect(x, y, length, width);
    if (!checked) {
        pdf.setLineWidth(1 / 72)

        // cross design
        // drawLine(pdf, x, y, x+length, y+width);
        // drawLine(pdf, x, y+width, x+length, y);
        // tick design
        pdf.line(x + length / 8 + length / 3.7, y + width - width / 3 + width / 8, x + length - length / 4, y + width / 4);
        pdf.line(x + length / 4, y + width / 2, x + length / 2.5, y + width - width / 4);


    }
}