import { HTTP_STATUS, MESSAGE } from "../constants/index.js";
import * as groupsService from "../services/groups.service.js";

export const getGroups = async (req, res) => {
    try {
        const groups = await groupsService.getAllGroups();
        res.json(groups);
    } catch (error) {
        console.log(error);
        res.status(HTTP_STATUS.INTERNAL_ERROR).json({message: MESSAGE.SERVER_ERROR});
    }
};