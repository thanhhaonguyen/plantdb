import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.status(401).json({ message: "Missing access token"});

    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
        console.log('Got the following error:',error);

        if (error) return res.status(401).json({ message: "Token has expired or invalid"});

        req.user = user;

        next()
    })
}

export default verifyToken;