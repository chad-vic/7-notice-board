const Staff = require('../models/Staff')
const Student = require('../models/Student')
const { createStaffJWT, createStudentJWT } = require('../utils/jwt')
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors')


const registerStaff = async (req, res) => {
    const { firstName, lastName, password, email, staffRole } = req.body

    const emailAlreadyExists = await Staff.findOne({ email });
    if (emailAlreadyExists) {
        throw new BadRequestError('Email already exists');
    }

    // first registered user is an Admin
    const isFirstAccount = (await Staff.countDocuments({})) === 0;
    const role = isFirstAccount ? 'Admin' : 'staff';

    const staff = await Staff.create({ firstName, lastName, password, email, staffRole, role })
    const token = createStaffJWT(staff)

    res.status(StatusCodes.CREATED).json({ token });

}


const registerStudents = async (req, res) => {
    const { firstName, lastName, password, email, speciality, level } = req.body

    const emailAlreadyExists = await Student.findOne({ email });
    if (emailAlreadyExists) {
        throw new BadRequestError('Email already exists');
    }

    const role = 'student';

    const student = await Student.create({ firstName, lastName, password, email, speciality, role, level })
    const token = createStudentJWT(student)

    res.status(StatusCodes.CREATED).json({ token });
}




const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        throw new BadRequestError('please provide email and password')
    }

    //  check if current user is either from staff or student
    const { staff } = req.query

    let user;

    if (staff === 'true') {
        user = await Staff.findOne({ email });
    } else {
        user = await Student.findOne({ email });
    }

    if (!user) {
        throw new UnauthenticatedError('Invalid Credentials');
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid Credentials');
    }

    // ckeck is user is either student or staff
    let token;
    if (user.role === 'student') {
        token = createStudentJWT(user)
    } else {
        token = createStaffJWT(user)
    }

    res.status(StatusCodes.OK).json({ token });

}


const logout = async (req, res) => {
    res.send('logout')
}

module.exports = {
    registerStaff,
    registerStudents,
    login,
    logout
}