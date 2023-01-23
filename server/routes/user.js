const express = require('express');
const router = express.Router();

const postController = require("../controllers/user/postController")
const commentController = require("../controllers/user/commentController")

router.get("/mainpage", postController.posts_limit_get)

router.get("/posts", postController.posts_all_get)

router.get("/posts/:id", postController.post_get)

router.post("/posts/:id", commentController.comment_post)

module.exports = router 