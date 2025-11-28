import * as plantTypeRepository from "../repository/plantType.repository.js";
import { getPagination } from "../utils/pagination.js";

export const getAllPlantTypeByGroupId = async (GroupID, page, limit) => {
    try {
        const {limit: _limit, offset, page: _page} = getPagination(page, limit);
        const data = await plantTypeRepository.getAllPlantTypeByGroupId(GroupID, _limit, offset);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
