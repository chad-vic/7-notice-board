const express = require('express');
const router = express.Router()


const {
    registerStaff,
    registerStudents,
    login,
    logout
} = require('../controllers/auth-users')

router.post('/staff/register', registerStaff)
router.post('/student/register', registerStudents)
router.post('/login', login)
router.get('/logout', logout)

module.exports = router