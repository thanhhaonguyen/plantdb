import * as speciesService from '../services/species.service.js';

export const getSpeciesList = async (req, res) => {
    try {
        const {TypeID} = req.params;
        const { page, limit } = req.query;
        const data = await speciesService.getSpeciesList(TypeID, page, limit);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}

export const getSpeciesInfo = async (req, res) => {
    try {
        const {SpeciesID} = req.params;
        const data = await speciesService.getSpeciesInfo(SpeciesID);
        if (!data) {
            return res.status(400).json({message: "Data not found"});
        }
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}