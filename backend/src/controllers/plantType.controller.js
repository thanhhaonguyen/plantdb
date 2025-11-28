import * as plantTypeService from "../services/plantType.service.js";

export const getPlantTypeByGroupId = async (req, res) => {
    try {
        const {GroupId} = req.params;
        const { page, limit } = req.query;
        const data = await plantTypeService.getAllPlantTypeByGroupId(GroupId, page, limit);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
};