import { parseExcelToJSON } from "../../utils/excel/excelParser.js";
import { validateHeader, findInvalidEnumValues } from "../../utils/excel/excelValidator.js";
import * as enumPropertiesService from "../enumProperties.service.js";
import * as propertiesRepository from "../../repository/properties.repository.js";
import * as speciesRepository from "../../repository/species.repository.js";
import * as speciesNamesRepository from "../../repository/speciesNames.repository.js";
import * as propertiesValueRepository from "../../repository/propertiesValue.repository.js";
import sequelize from "../../config/db.js";

export const importByTypeFromExcel = async (TypeID, fileBuffer) => {
    const properties = await propertiesRepository.getAllPropertiesByTypeId(TypeID);
    const { headers, rows } = await parseExcelToJSON(fileBuffer);

    // Kiểm tra xem cấu trúc cột file có đúng hay không
    const validHeaders = ["Species Name", "Origin", ...properties.map(p => p.name)];
    if (!validateHeader(validHeaders, headers)) {
        throw new Error("HEADER_INVALID");
    }

    // Kiểm tra lỗi thuộc tính không hợp lệ 
    // ở cột enum (ví dụ đã định nghĩa trong csdl là đỏ-xanh-vàng nhưng dữ liệu mới là tím) 
    const enumMap = {};
    for (const prop of properties) {
        if (prop.value_type === "enum") {
            const enums = await enumPropertiesService.getAllEnumPropertiesValuesByPropertiesID(prop.id);
            enumMap[prop.name] = {};
            enums.forEach(e => {
                enumMap[prop.name][e.enum_value] = e.id;
            })
        }
    }

    const enumErrors = findInvalidEnumValues(rows, Object.fromEntries(
        Object.entries(enumMap).map(([k,v]) => [k, Object.keys(v)])
    ));
    if (enumErrors.length > 0) {
        throw new Error(enumErrors.join(". "));
    }

    console.log("valid okkk");
    // insert
    const t = await sequelize.transaction();
    try {
        for (const row of rows) {
            // tạo species
            // tạm thời cho state = 1, sau này nên đổi thành 0 và chờ duyệt thành 1 mới xuất hiện trên web

            const temp_state = 1;
            const species = await speciesRepository.createSpecies(row["Origin"], temp_state, TypeID, { transaction: t});

            // tạo species name. tạm thời mặc định nó là tên chính (primary = 1), 
            // sau này người dùng cần dùng chức năng chỉnh sửa để đổi tên chính nếu muốn
            await speciesNamesRepository.createSpeciesNames(row["Species Name"], 1, species.id, { transaction: t});

            console.log(`Species name: ${row["Species Name"]}, origin: ${row["Origin"]}`)

            // tạo properties value
            for (const prop of properties){
                const cellValue  = row[prop.name];
                if (cellValue  == null) continue;

                if (prop.value_type === "num") {
                    await propertiesValueRepository.createPropertiesValue(Number(cellValue), species.id, prop.id, null, {transaction: t});
                          
                } else if (prop.value_type === "enum") {
                    const enum_id = enumMap[prop.name][cellValue];
                    await propertiesValueRepository.createPropertiesValue(null, species.id, prop.id, enum_id, {transaction: t});

                }
            }
        }

        await t.commit();
        console.log("Đã tạo thành công")
    } catch (error) {
        await t.rollback();
        throw error;
    }
};
