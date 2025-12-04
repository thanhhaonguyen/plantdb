import * as speciesRepository from "../repository/species.repository.js";
import { getPagination } from "../utils/pagination.js";

export const getSpeciesList = async (TypeID, page, limit) => {
    try {
        const {limit: _limit, offset, page: _page} = getPagination(page, limit);
        const data = await speciesRepository.getSpeciesList(TypeID, _limit, offset);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getSpeciesInfo = async (SpeciesID) => {
    try {
        const data = await speciesRepository.getSpeciesInfo(SpeciesID);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const createSpecies = async (origin, state, TypeID) => {
    try {
        return await speciesRepository.createSpecies(origin, state, TypeID)
    } catch (error) {
        console.log(error);
        throw error
    }
}
