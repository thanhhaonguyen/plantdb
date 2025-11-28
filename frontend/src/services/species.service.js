import api from "./api";

export const getSpeciesInformation = async (speciesID) => {
    const reponse = await api.get(`/api/species/${speciesID}`);
    const data = reponse.data;
    return data;
}

export const getSpeciesListByType = async (typeID, page, limit) => {
    const reponse = await api.get(`/api/species/type/${typeID}`, {
        params: {page, limit}
    });
    const data = reponse.data;
    return data;
}