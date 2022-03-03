const jwt = require('jsonwebtoken')

const createStaffJWT = (user) => {
    return jwt.sign(
        { userId: user._id, role: user.role, staffRole: user.staffRole, firstName: user.firstName, lastName: user.lastName },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME,
        }
    )
}

const createStudentJWT = (user) => {
    return jwt.sign(
        { userId: user._id, role: user.role, speciality: user.speciality, level: user.level },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME,
        }
    )
}

module.exports = {
    createStaffJWT,
    createStudentJWT
}