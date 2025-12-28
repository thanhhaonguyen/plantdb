import { HTTP_STATUS, MESSAGE } from "../constants/index.js";
import * as userService from "../services/user.service.js";

export const register = async (req, res) => {
    try {
        const user = await userService.register(req.body);
        res.json({ message: MESSAGE.REGISTRATION_SUCCESSFUL});
    } catch (error) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({ message: error.message});
    }
};

export const login = async (req, res) => {
    try {
        const {token, refreshToken, user} = await userService.login(req.body); 
        res.json({
            message: MESSAGE.LOGIN_SUCCESSFUL,
            token,
            refreshToken,
            role: user.role,
            redirect: user.role === "admin" ? "admin/dashboard" : "/"
        });
    } catch(error) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({ message: error.message});
    }
};

export const refreshToken = (req, res) => {
    const {refreshToken} = req.body;

    if (!refreshToken)
        return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: MESSAGE.MISSING_REFRESH_TOKEN})

    jwt.verify(
        refreshToken,
        process.env.REFRESH_SECRET_KEY,
        (err, user) => {
            if (err)
                return res.status(HTTP_STATUS.FORBIDDEN).json({ message: MESSAGE.TOKEN_HAS_EXPIRED_OR_INVALID})

            const newToken = jwt.sign(
                {id: user.id, role: user.role},
                process.env.SECRET_KEY,
                {expiresIn: CONFIG.TOKEN_EXPIRE_TIME}
            );

            res.json({token: newToken});
        }
    )
}