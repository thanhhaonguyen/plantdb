import api from "./api";
import { getSpeciesAPI, getTemplateAPI } from "./config.service";

export const getSpeciesInformation = async (speciesId) => {
    const response = await api.get(`${getSpeciesAPI}/${speciesId}`);
    const data = response.data;
    return data;
}

export const getSpeciesListByType = async (typeId, page, limit) => {
    const response = await api.get(getSpeciesAPI, {
        params: {
            typeId, 
            page: page ?? 1, 
            limit: limit ?? 12
        }
    });
    const data = response.data;
    return data;
}

export const getTemplate = async (typeId) => {
    const response = await api.get(getTemplateAPI, {
        params: {typeId},
        responseType: "blob"
    });

    return {
        data: response.data,
        headers: response.headers
    };
}