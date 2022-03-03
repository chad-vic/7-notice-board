const express = require('express');
const router = express.Router()
const { authenticateUser, authorizePermissions } = require('../middlewares/authentication')

const {
    createPost,
    getAllPosts,
    getSinglePost,
    deletePost,
    updatePost,
    getPublicPosts
} = require('../controllers/post')

router.get('/public/all', authenticateUser, getPublicPosts)

router.route('/')
    .get(authenticateUser, getAllPosts)
    .post(authenticateUser, authorizePermissions('Admin', 'staff'), createPost)

router.route('/:id')
    .get(authenticateUser, authorizePermissions('Admin', 'staff'), getSinglePost)
    .delete(authenticateUser, authorizePermissions('Admin', 'staff'), deletePost)
    .patch(authenticateUser, authorizePermissions('Admin', 'staff'), updatePost)

module.exports = router