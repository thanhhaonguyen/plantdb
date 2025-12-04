import * as propertiesValueRepository from "../repository/propertiesValue.repository.js";

export const createPropertiesValue = async (number_value, species_id, properties_id, enum_properties_id) => {
    try {
        return await propertiesValueRepository.createPropertiesValue(number_value, species_id, properties_id, enum_properties_id)
    } catch (error) {
        console.log(error);
        throw error
    }
}