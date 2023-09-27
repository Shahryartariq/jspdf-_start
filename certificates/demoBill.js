console.log('Main Module - Demo Bill');


export function billFunction(printText, createCell, createBorder, longText, drawLine, checkbox ,radioButtonpdf) {

    document
        .getElementById("generateBill")
        .addEventListener("click", function () {

            const pdf = new jsPDF("p", "in", "a4");  //8.25 x 11.75 inches

            createCell(pdf, 0.5, 0.5);
            createBorder(pdf);
            printText(pdf, 4.6, 0.4, "Muhammad Shehryar Tariq", true);
            let textr2c2 = "This  is sample long  text This  is sample long  test This  is sample long  test This  is sample long  test This  is sample long  test This  is sample long  test This  is sample long  test This  is sample long  test"
            longText(pdf, textr2c2, 4.20, 1.6, 3.1,true, true, "courier");
            drawLine(pdf, 0.5, 2.5, 7.75, 2.5);

            pdf.addPage();

            // checkbox
            checkbox(pdf, 0.7, 7.1, 0.2, 0.2);
            checkbox(pdf, 0.7, 7.5, 0.2, 0.2, true);
            


            pdf.save("test.pdf");
        });


}