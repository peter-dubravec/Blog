const express = require('express');
const requireAuth = require("../middleware/requireAuth")
const adminController = require("../controllers/admin/adminPostController")

const router = express.Router();

router.post("/login", adminController.login_post)

// For routers after this line, authentification is required
router.use(requireAuth.isAuth)


router.get("/dashboard", adminController.posts_get)

router.get("/dashboard/:id", adminController.post_get)

router.get("/dashboard/:id/without-comments", adminController.post_update_get)

router.post("/dashboard/:id/delete", adminController.post_delete_post)

router.post("/dashboard/:id/publish", adminController.post_publish_post)

router.post("/dashboard/create-post", adminController.post_create_post)

router.post("/dashboard/:id/update", adminController.post_update_post)

router.post("/dashboard/comment/:id/delete", adminController.comment_delete_post)

module.exports = router 