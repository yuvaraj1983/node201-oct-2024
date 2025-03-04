const router = require("express").Router();
const { createNewBlog, getAllBlogs, getBlogById } = require("../controllers/blogs.controller")

router.post("/new", createNewBlog);
router.get("/", getAllBlogs);
router.get("/:blogId", getBlogById);

module.exports = router;