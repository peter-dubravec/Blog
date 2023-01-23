const express = require('express');
const router = express.Router();

const adminController = require("../controllers/admin/adminPostController")

router.get("/dashboard", adminController.posts_get)

router.get("/dashboard/:id", adminController.post_get)

router.post("/dashboard/:id/delete", adminController.post_delete_post)

router.post("/dashboard/:id/publish", adminController.post_publish_post)

router.post("/create-post", adminController.post_create_post)

router.post("/login", adminController.login_post)


module.exports = router 