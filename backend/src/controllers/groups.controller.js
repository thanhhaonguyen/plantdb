import * as groupsService from "../services/groups.service.js";

export const getGroups = async (req, res) => {
    try {
        const groups = await groupsService.getAllGroups();
        res.json(groups);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
};