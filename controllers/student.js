const Student = require('../models/Student');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');


const getAllStudent = async (req, res) => {

    const students = await Student.find({ role: 'student' }).select('-password');
    res.status(StatusCodes.OK).json({ students, counts: students.length });
}


const getSingleStudent = async (req, res) => {

    const student = await Student.findOne({ _id: req.params.id }).select('-password');
    if (!student) {
        throw new NotFoundError(`No user with id : ${req.params.id}`);
    }

    res.status(StatusCodes.OK).json({ student });
}



const updateStudent = async (req, res) => {

    const student = await Student.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    );

    res.status(StatusCodes.OK).json({ msg: 'updated !' });
}


const deleteStudent = async (req, res) => {
    const student = await Student.findOne({ _id: req.params.id });

    if (!student) {
        throw new NotFoundError(`No user with id : ${req.params.id}`);
    }

    await Student.remove()
    res.status(StatusCodes.OK).json({ message: 'deleted !' })
}

module.exports = {
    getAllStudent,
    getSingleStudent,
    updateStudent,
    deleteStudent
}