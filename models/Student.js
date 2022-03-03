const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcryptjs')


const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide surname']
    },
    lastName: {
        type: String,
        required: [true, 'Please provide lastname']
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
    speciality: {
        type: String,
        required: [true, 'Please provide speciality'],
        enum: {
            values: ['Digital Marketing', 'Web Development', 'Graphic Design', 'Artificial Intelligence', 'Hacking'],
            message: `{VALUE} is not supported`
        }
    },
    level: {
        type: String,
        required: [true, 'Please provide level'],
        enum: {
            values: ['Level1', 'Level2', 'Level3', 'Level4'],
            message: `{VALUE} is not supported`
        }
    },
    role: {
        type: String,
        enum: ['student'],
        default: 'student',
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

StudentSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

StudentSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
};

module.exports = mongoose.model('Student', StudentSchema)