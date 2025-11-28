import * as propertiesRepository from "../repository/properties.repository.js";

export const getAllPropertiesByTypeId = async (TypeID) => {
    try {
        const data = await propertiesRepository.getAllPropertiesByTypeId(TypeID);
        return data;
    } catch (error) {
        console.log("Tìm thấy bọ ở properties.service")
        throw error;
    }
}