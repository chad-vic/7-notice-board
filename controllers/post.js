const Post = require('../models/Post')
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');


const getAllPosts = async (req, res) => {

    // retreiving posts depending on your role ie from staff or student
    const { speciality: studentSpeciality, role, _id: staffID } = req.user

    let posts;
    if (role === 'student') {
        posts = await Post.find({ audience: req.user.level, speciality: studentSpeciality }).sort('createdAt')
    } else {
        posts = await Post.find({ createdBy: staffID }).sort('createdAt')
    }

    res.status(StatusCodes.OK).json({ posts, counts: posts.length })
}

const getPublicPosts = async (req, res) => {

    const posts = await Post.find({ audience: 'Public', speciality: 'Public' }).sort('createdAt')
    res.status(StatusCodes.OK).json({ posts, counts: posts.length })

}

module.exports = getPublicPosts

const createPost = async (req, res) => {

    const { title, description, audience, speciality, image } = req.body
    const { _id: userID, firstName, lastName } = req.user

    const userObject = {
        title,
        description,
        audience,
        speciality,
        createdBy: userID,
        authorName: `${firstName} ${lastName}`,
        image
    }

    const post = await Post.create(userObject)

    res.status(StatusCodes.CREATED).json({ post })
}


const getSinglePost = async (req, res) => {
    const {
        user: { _id: staffID },
        params: { id: postID }
    } = req

    const post = await Post.findOne({ _id: postID, createdBy: staffID })

    if (!post) {
        throw new NotFoundError(`No job with id ${postID}`)
    }

    res.status(StatusCodes.OK).json({ post })
}


const updatePost = async (req, res) => {
    const {
        user: { _id: staffID },
        params: { id: postID }
    } = req

    const post = await Post.findByIdAndUpdate({ _id: postID, createdBy: staffID }, req.body,
        { new: true, runValidators: true })

    if (!post) {
        throw new NotFoundError(`No job with id ${postID}`)
    }

    res.status(StatusCodes.OK).json({ post })
}

const deletePost = async (req, res) => {
    const {
        user: { _id: staffID },
        params: { id: postID }
    } = req

    const post = await Post.findOne({ _id: postID, createdBy: staffID })

    if (!post) {
        throw new NotFoundError(`No job with id ${postID}`)
    }

    await post.remove()
    res.status(StatusCodes.OK).json({ message: 'deleted !' })

}

module.exports = {
    createPost,
    getAllPosts,
    getSinglePost,
    deletePost,
    updatePost,
    getPublicPosts
}