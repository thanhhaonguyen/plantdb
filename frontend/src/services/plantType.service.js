import api from "./api";
import { getPlantTypesAPI } from "./config.service";

export const getAllTypeByGroup = async (groupId, page, limit) => {
    const response = await api.get(getPlantTypesAPI, {
        params: {
            groupId, 
            page: page ?? 1, 
            limit: limit ?? 12
        }
    });
    const data = response.data;
    return data;
}