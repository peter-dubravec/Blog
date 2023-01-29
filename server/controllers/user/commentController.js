const Comment = require("../../models/comment")
const { body, validationResult } = require('express-validator');

exports.comment_post = [
    body("author", "Invalid author").trim().escape().isLength({ min: 1 }),
    body("text", "Invalid text").trim().escape().isLength({ min: 1 }),
    body("commentedPost").isMongoId(),
    async (req, res) => {
        console.log(req.body)
        const errors = validationResult(req)

        if (!errors.isEmpty) {
            res.status(400).json(errors.array())
        }

        try {
            const comment = await Comment.create(req.body)
            res.status(200).json(comment)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
]


