import {Groups, PlantType} from "../models/index.model.js";

export const getAllPlantTypeByGroupId = async (GroupID, limit, offset) => {
    console.log(`Searching for group ${GroupID} species `)
    const {count, rows} = await PlantType.findAndCountAll({
        where: {
            group_id: GroupID,
        },
        include: [{
            model: Groups,
            attributes: ["name"]
        }],
        limit: limit,
        offset: offset
    });
    return {
        data: rows,
        pagination: {
            totalItems: count,
            totalPages: Math.ceil(count/limit)
        }
    }
};

export const createPlantType = async (typeName, GroupID) => {
    return await PlantType.create({typeName, GroupID});
}