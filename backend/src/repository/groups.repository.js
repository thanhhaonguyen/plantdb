import {Groups} from "../models/index.model.js";

export const getAllGroups = async () => {
    console.log(`Searching for all group.`);
    return await Groups.findAll();
};