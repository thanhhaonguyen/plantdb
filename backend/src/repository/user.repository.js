import User from "../models/users.model.js";

export const findOneByField = async (field, value) => {
    console.log(`Searching in the "${field}" field for the value "${value}".`);
    return await User.findOne({where : {[field]: value}});
}

export const create = async (username, email, password, role) => {
    console.log(`Creating..`)
    return await User.create({username, email, password, role});
}