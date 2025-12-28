import { HTTP_STATUS, MESSAGE } from "../constants/index.js";
import * as plantTypeService from "../services/plantType.service.js";

export const getPlantTypeByGroupId = async (req, res) => {
    try {
        const {groupId} = req.query;
        if (!groupId) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: MESSAGE.MISSING_groupId
            });
        };

        const { page, limit } = req.query;

        const data = await plantTypeService.getAllPlantTypeByGroupId(groupId, page, limit);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(HTTP_STATUS.INTERNAL_ERROR).json({message: MESSAGE.SERVER_ERROR});
    }
};