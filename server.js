require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const cors = require('cors')

// Routers
const authUsersRouter = require('./routes/auth-users')
const postsRouter = require('./routes/post')
const staffRouter = require('./routes/staff')
const studentsRouter = require('./routes/student')

// errors handelers
const errorHandlerMiddleware = require('./middlewares/error-handler')
const notFound = require('./middlewares/not-found')

// database
const connectDB = require('./config/database');

// middlewares
app.use(express.json())
app.use(cors())

// environment variables
const port = process.env.PORT || 3000
const dbUrl = process.env.MONGO_URI

// Routes 
app.use('/api/auth', authUsersRouter)
app.use('/api/posts', postsRouter)
app.use('/api/staff', staffRouter)
app.use('/api/students', studentsRouter)



// costum error middleWares
app.use(errorHandlerMiddleware)
app.use(notFound)


// starts server when connected to the database
const start = async () => {
    try {
        await connectDB(dbUrl)
        app.listen(port, () => console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start();
