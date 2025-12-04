import * as enumPropertiesRepository from "../repository/enumProperties.repository.js";

export const getAllEnumPropertiesValuesByPropertiesID = async (PropertiesID) => {
    try {
        const data = await enumPropertiesRepository.getAllEnumPropertiesValuesByPropertiesID(PropertiesID);
        return data;
    } catch (error) {
        console.log("Có lỗi ở enumProperties.service.js")
        throw error;
    }
}