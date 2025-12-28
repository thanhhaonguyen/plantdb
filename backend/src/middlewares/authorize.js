import { HTTP_STATUS } from "../constants/index.js"

const authorize = ({ role }) => {
    return (req, res, next) => {
        if (!req.user || req.user.role !== role){
            return res.status(HTTP_STATUS.FORBIDDEN).json({ message: "Forbidden" })
        }
        next();
    };
};

export default authorize;