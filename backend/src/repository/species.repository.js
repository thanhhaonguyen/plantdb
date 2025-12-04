import { Species, Images, SpeciesNames, PropertiesValue, Properties, EnumProperties} from "../models/index.model.js";

// Hiện ra các list giống cây của type nào đó (ví dụ type = lúa, hiện giống OM1, OM2,..)
export const getSpeciesList = async (TypeID, limit, offset) => {
    console.log(`Searching for type ${TypeID} species `)
    const {count, rows} = await Species.findAndCountAll({
        where: {
            type_id: TypeID,
            state: 1
        },
        attributes: ["id"],
        include: [
            {
                model: Images,
                attributes: ["id", "url"],
                where: { is_representative: 1 },
                required: true, //Tránh show dữ liệu nếu thuộc tính này không có ? (chưa chứng thực)
            },
            {
                model: SpeciesNames,
                attributes: ["id", "name"],
                where: { is_primary: 1},
                required: true
            }
        ],
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
}

export const getSpeciesInfo = async (SpeciesID) => {
    try {
        console.log("Searching for species with ID:", SpeciesID);
        const result = await Species.findByPk(SpeciesID, {
            attributes: ["id", "origin", "type_id"],
            include: [
                {
                    model: Images,
                    attributes: ["id", "url", "name", "is_representative"],
                    required: false
                },
                {
                    model: SpeciesNames,
                    attributes: ["id", "name", "is_primary"],
                    required: false
                },
                {
                    model: PropertiesValue,
                    attributes: ["number_value", "species_id", "properties_id", "enum_properties_id"],
                    required: false,
                    include: [
                        {
                            model: Properties,
                            attributes: ["id", "name", "value_type"], 
                            required: false
                        },
                        {
                            model: EnumProperties,
                            attributes: ["id", "enum_value"],
                            required: false
                        }
                    ]
                }
            ]
        });
        //console.log("Query result:", result);
        return result;
    } catch (error) {
        console.error("Error in getSpeciesInfo:", error);
        throw error;
    }
}


export const createSpecies = async (origin, state, type_id) => {
    const result = await Species.create({origin, state, type_id});
    return result
}