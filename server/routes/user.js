const express = require('express');
const router = express.Router();

const postController = require("../controllers/user/postController")
const commentController = require("../controllers/user/commentController")
const emailController = require("../controllers/user/emailController")

router.get("/mainpage", postController.posts_limit_get)

router.post("/sendmail", emailController.send_email_post)

router.get("/posts", postController.posts_all_get)

router.get("/posts/:id", postController.post_get)

router.post("/posts/:id", commentController.comment_post)

module.exports = router 