import ExcelJS from "exceljs";

export const parseExcelToJSON = async (fileBuffer) => {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(fileBuffer);
    const sheet = workbook.worksheets[0];

    const headers = sheet.getRow(1).values.slice(1);
    const rows = [];

    sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;

    const obj = {};
    headers.forEach((header, index) => {
        obj[header] = row.getCell(index + 1).value;
    });

    rows.push(obj);
    });
    
    return { headers, rows };
};
