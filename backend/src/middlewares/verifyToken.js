import jwt from "jsonwebtoken";
import { MESSAGE } from "../constants/index.js";

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.status(401).json({ message: MESSAGE.MISSING_ACCESS_TOKEN});

    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
        console.log('Got the following error:',error);

        if (error) return res.status(401).json({ message: MESSAGE.TOKEN_HAS_EXPIRED_OR_INVALID});

        req.user = user;

        next()
    })
}

export default verifyToken;