import {SpeciesNames} from "../models/index.model.js";

export const createSpeciesNames = async (name, is_primary, species_id) => {
    return await SpeciesNames.create({name, is_primary, species_id});
} 