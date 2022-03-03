const express = require('express');
const router = express.Router()
const { authenticateUser, authorizePermissions } = require('../middlewares/authentication')

const {
    getAllStudent,
    getSingleStudent,
    deleteStudent,
    updateStudent,
} = require('../controllers/student')

router.get('/', authenticateUser, authorizePermissions('Admin'), getAllStudent)

router.route('/:id')
    .get(authenticateUser, getSingleStudent)
    .delete(authenticateUser, authorizePermissions('Admin', 'staff'), deleteStudent)
    .patch(authenticateUser, updateStudent)

module.exports = router