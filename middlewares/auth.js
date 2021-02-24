const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secret';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(authorization, secret);
        next();
    } catch (error) {
        const message = error.message;
        res.status(401).json({message});
    }
};

module.exports = auth;