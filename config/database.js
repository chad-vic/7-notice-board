const mongoose = require('mongoose')

const connectDB = (dbUrl) => {
    return mongoose.connect(dbUrl)
}

module.exports = connectDB