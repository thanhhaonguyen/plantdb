import * as userService from "../services/user.service.js";

export const register = async (req, res) => {
    try {
        const user = await userService.register(req.body);
        res.json({ message: "Register success", user});
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
};

export const login = async (req, res) => {
    try {
        const {token, user} = await userService.login(req.body); 
        res.json({
            message: "Login success",
            token,
            role: user.role,
            redirect: user.role === "admin" ? "admin/dashboard" : "/"
        });
    } catch(error) {
        res.status(400).json({ message: error.message});
    }
};