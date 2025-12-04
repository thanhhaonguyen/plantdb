import {generateTemplateExcel} from "../../utils/excel/excelGenerateTemplate.js";
import * as enumPropertiesService from "../enumProperties.service.js";
import * as propertiesRepository from "../../repository/properties.repository.js";

export const generateTemplateByType = async (TypeID) => {
    const properties = await propertiesRepository.getAllPropertiesByTypeId(TypeID);

    const enumMap = {};
    for (const prop of properties) {
        if (prop.value_type === "enum") {
            const data = await enumPropertiesService.getAllEnumPropertiesValuesByPropertiesID(prop.id);
            enumMap[prop.name] = data.map(e => e.enum_value);
        }
    }

    return generateTemplateExcel(properties, enumMap);
};
