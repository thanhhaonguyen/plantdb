import * as speciesNamesRepository from "../repository/speciesNames.repository.js"

export const createSpeciesNames = async (name, is_primary, species_id) => {
    try {
        return await speciesNamesRepository.createSpeciesNames(name, is_primary, species_id);
    } catch (error) {
        throw error;
    }
}