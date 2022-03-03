const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcryptjs')

const StaffSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide firstName']
    },
    lastName: {
        type: String,
        required: [true, 'Please provide lastName']
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email',
        },
    },
    staffRole: {
        type: String,
        required: [true, 'Please provide speciality'],
        enum: ['Admin', 'Digital Marketing', 'Web Development', 'Graphic Design', 'Artificial Intelligence', 'Hacking', 'Secretary']
    },
    role: {
        type: String,
        enum: ['Admin', 'staff'],
        default: 'staff',
    },
    image: {
        type: String,
    },
    dateOfBirth: {
        type: String,
    },
    age: {
        type: Number,
    }
})

StaffSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

StaffSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
};


module.exports = mongoose.model('Staff', StaffSchema)