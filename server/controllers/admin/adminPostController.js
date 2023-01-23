const Posts = require("../../models/post")
const Comments = require("../../models/comment")
const async = require("async")
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const Admins = require("../../models/admin")
const jwt = require("jsonwebtoken")

exports.posts_get = async (req, res, next) => {
    try {
        const posts = await Posts.find();
        res.json(posts)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.post_create_post = [
    body("title", "Invalid title").trim().escape().isLength({ min: 1 }),
    body("text", "Invalid text").trim().escape().isLength({ min: 1 }),
    body("isPublished").isBoolean(),
    async (req, res, next) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            const errorMessages = []

            errors.array().forEach(error => {
                errorMessages.push(error.msg)
            })

            res.status(400).json(errorMessages)
        }

        try {
            const post = await Posts.create(req.body)
            res.json(post)
        } catch (error) {
            res.status(400).json(error.message)
        }

    }
]

exports.post_get = (req, res, next) => {
    async.parallel({
        posts(cb) {
            Posts.findById(req.params.id).exec(cb)
        },
        comments(cb) {
            Comments.find({
                commentedPost
                    : req.params.id
            }).exec(cb)
        }
    }, (err, results) => {
        if (err) {
            return res.status(400).json(err.message)
        }

        res.status(200).json(results)
    })
}

exports.post_delete_post = (req, res, next) => {
    async.parallel({
        posts(cb) {
            Posts.findByIdAndDelete(req.params.id).exec(cb)
        },
        comments(cb) {
            Comments.deleteMany({ commentedPost: req.params.id }).exec(cb)
        }
    }, (err, results) => {
        if (err) {
            return res.status(400).json(err.message)
        }

        res.status(200).json(results)
    })
}

exports.post_publish_post = (req, res, next) => {
    console.log(typeof req.body.isPublished)
    Posts.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, post) => {
        if (err) {
            return res.status(200).json(err.message)
        }

        res.json(post)
    })
}

const createToken = (_id) => {
    jwt.sign({ _id: _ })
}

exports.login_post = [
    body("username", "Invalid username").trim().escape().isLength({ min: 1 }),
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        }

        try {
            const admin = await Admins.findOne({ username: req.body.username })
            const isAuthorized = await bcrypt.compare(req.body.password, admin.password)

            if (isAuthorized) {
                const token = jwt.sign({ _id: admin._id }, process.env.SECRET_JWT)
                res.json({ message: "logged in", token })
            } else {
                res.json({ message: "Not authorized" })
            }

        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
]