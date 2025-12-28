import ExcelJS from "exceljs";

// Ý tưởng trả về file tải là tên type để tăng cường trải nghiệm người dùng nhưng gặp phải vấn đề
// cây trồng tên tiếng Việt bị lỗi nên phải dùng hàm xử lý lại như "Đậu nành" -> "dau_nanh"

const removeDiacritics = (str) => {
    str = str.toLowerCase();
    str = str.replace(/\s+/g, '_');

    const from = "àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ";
    const to   = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd";
    
    for (let i = 0; i < from.length; i++) {
        str = str.replace(new RegExp(from[i], 'g'), to[i]);
    }
    return str;
}

export const generateTemplateExcel = async (properties, enumMap, typeName) => {
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

    const buffer = await workbook.xlsx.writeBuffer()

    return {
        buffer,
        typeName: removeDiacritics(typeName)
    }
};
