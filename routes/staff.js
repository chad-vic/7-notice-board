const express = require('express');
const router = express.Router()
const { authenticateUser, authorizePermissions } = require('../middlewares/authentication')

const {
    getAllStaff,
    getSingleStaff,
    deleteStaff,
    updateStaff,
} = require('../controllers/staff')

router.get('/', authenticateUser, authorizePermissions('Admin'), getAllStaff)

router.route('/:id')
    .get(authenticateUser, authorizePermissions('Admin', 'staff'), getSingleStaff)
    .delete(authenticateUser, authorizePermissions('Admin'), deleteStaff)
    .patch(authenticateUser, authorizePermissions('Admin', 'staff'), updateStaff)

module.exports = router