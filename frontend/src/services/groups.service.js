import api from "./api";

export const getAllGroups = async () => {
    const reponse = await api.get(`/api/groups`);
    const data = reponse.data;
    return data;
}