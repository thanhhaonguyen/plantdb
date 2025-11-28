import ExcelJS from "exceljs";
import { getAllEnumPropertiesValuesByPropertiesID } from "../services/enumProperties.service.js";

export const generateTemplateExcel = async (TypeID, properties) => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Template");

    const headerRow = ["Species Name"];
    properties.forEach(prop => headerRow.push(prop.name));
    sheet.addRow(headerRow);

    properties.forEach((prop, index) => {
        if (prop.value_type === "enum") {
            const col = index + 2; // +2 vì cột 1 = Species Name
            sheet.getColumn(col).note = "Chỉ nhận giá trị hợp lệ (enum)";
            sheet.getCell(1, col).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFF99' }
            }
        }
    });

    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
};

export const checkHeader = async (validHeaders, fileBuffer) => {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(fileBuffer);
    const sheet = workbook.worksheets[0];

    const excelHeaders = sheet.getRow(1).values.slice(1);

    const isValid = validHeaders.every((header, index) => {
        return header === excelHeaders[index];
    })

    return isValid;
}

export const checkEnumCols = async (properties, fileBuffer) => {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(fileBuffer);
    const sheet = workbook.worksheets[0];

    // Lấy cột enum
    const enumColumns = properties
        .map((prop, index) => prop.value_type === "enum" ? { index: index + 2, id: prop.id, name: prop.name } : null)
        .filter(v => v != null);

    const errors = []
    
    for (const colInfo of enumColumns) {
        const data = await getAllEnumPropertiesValuesByPropertiesID(colInfo.id);
        const enumValues = data.map(e => e.enum_value);

        const excelValues = [];
        sheet.eachRow((row, rowNumber) => {
            if (rowNumber === 1) return; // skip header
            const cellValue = row.getCell(colInfo.index).value;
            if (cellValue != null) excelValues.push(cellValue);
        });

        const uniqueColValues = [...new Set(excelValues)];

        const invalidValues = uniqueColValues.filter(v => !enumValues.includes(v));
        if (invalidValues.length > 0) {
            errors.push(`Cột ${colInfo.name} có các giá trị enum không hợp lệ: ${invalidValues.join(", ")}`);
        }
    }
    
    return errors;
}

