import ExcelJS from "exceljs";

export const generateTemplateExcel = async (properties, enumMap) => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Template");

    const headerRow = ["Species Name", "Origin", ...properties.map(p => p.name)];
    sheet.addRow(headerRow);

    properties.forEach((prop, index) => {
        const col = index + 3;

        if (prop.value_type === "enum") {
            const enumValues = enumMap[prop.name];

                sheet.getCell(1, col).fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FFFF99" }
            };

            sheet.getColumn(col).eachCell((cell, rowNumber) => {
                if (rowNumber === 1) return;

                cell.dataValidation = {
                    type: "list",
                    allowBlank: true,
                    formulae: [`"${enumValues.join(",")}"`]
                };
            });
        }
    });

    return workbook.xlsx.writeBuffer();
};
