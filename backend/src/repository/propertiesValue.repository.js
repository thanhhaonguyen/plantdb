import {PropertiesValue} from "../models/index.model.js";

export const createPropertiesValue = async (number_value, species_id, properties_id, enum_properties_id) => {
    const result = await PropertiesValue.create({number_value, species_id, properties_id, enum_properties_id});
    return result
}