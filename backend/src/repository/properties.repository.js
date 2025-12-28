import { json } from "sequelize";
import { Properties, PlantType} from "../models/index.model.js";

export const getAllPropertiesByTypeId = async (TypeID) => {
    console.log("Get all properties of type: ", TypeID);
    const result = await Properties.findAll({
        where: {
            type_id: TypeID
        },
        attributes: ["id", "name", "value_type", "type_id"],
        include: [
            {
                model: PlantType,
                attributes: ["id", "name"],
                required: false
            }
        ]
    });

    console.log(`Result:`, JSON.stringify(result[0]));
    return result;
}
