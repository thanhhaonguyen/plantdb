import * as groupsRepository from "../repository/groups.repository.js"

export const getAllGroups = async () => {
    try {
        const data = groupsRepository.getAllGroups();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
