const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide title'],
        maxlength: [50, 'post title can not exeed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please provide description'],
        maxlength: [250, 'post title can not exeed 100 characters']
    },
    audience: {
        type: String,
        enum: ['Public', 'Level1', 'Level2', 'Level3', 'Level4'],
        required: [true, 'Please provide audience']
    },
    speciality: {
        type: String,
        required: [true, 'Please provide speciality'],
        enum: ['Public', 'Digital Marketing', 'Web Development', 'Graphic Design', 'Artificial Intelligence', 'Hacking']
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Staff',
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
},
    { timestamps: true })

module.exports = mongoose.model('Post', PostSchema)