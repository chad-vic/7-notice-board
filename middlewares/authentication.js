const jwt = require('jsonwebtoken')
const { UnauthenticatedError, UnauthorizedError } = require('../errors')
const Staff = require('../models/Staff')
const Student = require('../models/Student')

const authenticateUser = async (req, res, next) => {
    // check header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('Authentication invalid')
    }
    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)

        let user;
        if (payload.role === 'student') {
            user = await Student.findOne({ _id: payload.userId }).select('-password')
        } else {
            user = await Staff.findOne({ _id: payload.userId }).select('-password')
        }
        // attach the user to the post routes
        req.user = user
        next()
    } catch (error) {
        throw new UnauthenticatedError('Authentication invalid')
    }

}

const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnauthorizedError(
                'Unauthorized to access this route'
            );
        }
        next();
    };
};

module.exports = {
    authenticateUser,
    authorizePermissions,
};

