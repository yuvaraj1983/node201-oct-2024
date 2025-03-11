const router = require("express").Router();
const { createNewBlog, getAllBlogs, getBlogById, updateBlogById, deleteBlogById,
    searchBlogs

 } = require("../controllers/blogs.controller")
const pathValidator = require("../middleware/pathValidator");
const { blogIdSchema } = require("../validations/blogs.validation");

router.post("/new", createNewBlog);
router.get("/", getAllBlogs);
router.get("/search", searchBlogs);

// router.get("/:blogId", getBlogById);
// router.patch("/:blogId", updateBlogById);
// router.delete("/:blogId", deleteBlogById);


router
    .route("/:blogId")
    .all(pathValidator( blogIdSchema))
    .get(getBlogById)
    .patch(updateBlogById)
    .delete(deleteBlogById);

module.exports = router;