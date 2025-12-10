import * as plantTypeService from "../services/plantType.service.js";

export const getPlantTypeByGroupId = async (req, res) => {
    try {
        const {groupId} = req.query;
        if (!groupId) {
            return res.status(400).json({
                message: "Thiếu groupId"
            });
        };

        const { page, limit } = req.query;

        const data = await plantTypeService.getAllPlantTypeByGroupId(groupId, page, limit);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
};