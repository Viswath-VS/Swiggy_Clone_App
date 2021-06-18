import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const jwtKey = process.env.JWT_KEY;
const authMiddleware = (req, res, next) => {
    const token = req.header('authorization');
    if (!token) return res.status(404).send('json web token not found. try again');

    try {
        let accessToken = token.split(' ');
        const decoded = jwt.verify(accessToken[1], jwtKey);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('invalid token');
    }
};

export default authMiddleware;
