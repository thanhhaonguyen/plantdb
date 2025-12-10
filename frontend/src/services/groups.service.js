import api from "./api";
import { getGroupsAPI } from "./config.service";

export const getAllGroups = async () => {
    const response = await api.get(getGroupsAPI);
    const data = response.data;
    return data;
}