import api from "./api";

export const getAllTypeByGroup = async (groupID, page, limit) => {
    const reponse = await api.get(`/api/planttype/${groupID}`, {
        params: {page, limit}
    });
    const data = reponse.data;
    return data;
}