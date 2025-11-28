import {EnumProperties} from "../models/index.model.js"

export const getAllEnumPropertiesValuesByPropertiesID = async (PropertiesID) => {
    const result = await EnumProperties.findAll({
        where: {
            properties_id: PropertiesID
        },
        attributes: ["id", "properties_id", "enum_value"]
    });

    return result;
}