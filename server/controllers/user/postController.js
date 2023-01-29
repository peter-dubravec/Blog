const Posts = require("../../models/post")
const Comments = require("../../models/comment")
const he = require('he');
const async = require("async")


exports.posts_limit_get = (req, res, next) => {
    Posts.find({ isPublished: true }, { isPublished: 0 }).sort({ published: -1 }).limit(3).exec((err, posts) => {
        if (err) {
            return res.status(400).json({ error: err.message })
        }
        res.status(200).json(posts)
    })
}

exports.posts_all_get = (req, res, next) => {
    Posts.find({ isPublished: true }, { isPublished: 0 }).sort({ published: -1 }).exec((err, posts) => {
        if (err) {
            return next(err)
        }
        res.json(posts)
    })
}

exports.post_get = (req, res, next) => {
    async.parallel({
        post(cb) {
            Posts.findById(req.params.id).exec(cb)
        },
        comments(cb) {
            Comments.find({ commentedPost: req.params.id }).exec(cb)
        }
    }, (err, results) => {
        if (err) {
            return next(err)
        }

        if (results.post == null) {
            const err = new Error("Post not found");
            err.status = 404;
            return next(err)
        }
        
        results.post.text = he.decode(results.post.text)

        res.json({ post: results.post, comments: results.comments })

    })
}