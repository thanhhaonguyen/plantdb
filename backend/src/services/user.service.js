import * as userRepository from '../repository/user.repository.js';
import jwt from "jsonwebtoken";
import bcrypt from  "bcrypt";

const SECRET_KEY = process.env.SECRET_KEY;

const checkIfExists = async (field, value) => {
    const existing = await userRepository.findOneByField(field, value);
    if (existing) throw new Error(`${field.charAt(0).toUpperCase() + field.slice(1)} already exists`);
} 

export const register = async ({username, email, password, role}) => {
    await checkIfExists('username', username);
    await checkIfExists('email', email);

    const hashed = await bcrypt.hash(password, 10);
    const user = await userRepository.create(username, email, hashed, role);
    return user;
}

export const login = async ({username, password}) => {
    const user = await userRepository.findOneByField('username', username);
    if (!user) throw new Error("User not found!");

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error("Incorrect password");

    const token = jwt.sign(
        {id: user.id, role: user.role},
        SECRET_KEY,
        {expiresIn: "1d"}
    );

    return {token, user};
}
