const Staff = require('../models/Staff');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');


const getAllStaff = async (req, res) => {
    const staff = await Staff.find({ role: 'staff' }).select('-password');
    res.status(StatusCodes.OK).json({ staff, counts: staff.length });
}


const getSingleStaff = async (req, res) => {

    const staff = await Staff.findOne({ _id: req.params.id }).select('-password');
    if (!staff) {
        throw new NotFoundError(`No user with id : ${req.params.id}`);
    }

    res.status(StatusCodes.OK).json({ staff });
}


const updateStaff = async (req, res) => {

    const staff = await Staff.findOneAndUpdate(
        { _id: req.user.params.id },
        req.body,
        { new: true, runValidators: true }
    );

    res.status(StatusCodes.OK).json({ msg: 'updated !' });
}


const deleteStaff = async (req, res) => {

    const staff = await Staff.findOne({ _id: req.params.id });

    if (!staff) {
        throw new NotFoundError(`No user with id : ${req.params.id}`);
    }

    await Staff.remove()
    res.status(StatusCodes.OK).json({ message: 'deleted !' })
}

module.exports = {
    getAllStaff,
    getSingleStaff,
    updateStaff,
    deleteStaff
}