const Blog = require("../models/blog.model");


const createNewBlog = async (req, res) => {
    //console.log(req.body);
    try {
        const newBlog = await Blog.create(req.body);
        res.send(newBlog);
    } catch (error) {
        res.status(500).send({ message: `Something went wrong ${error.message}`});
    }
    
};

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.send(blogs);
    } catch (error) {
        res.status(500).send({ message: `Something went wrong ${error.message}`});
    }
   
}

const getBlogById = async (req, res) => {
    const { blogId } = req.params;
    try {
        const blog = await Blog.findById(blogId);
        if(blog) return res.send(blog);
        res.status(404).send({message: `Blog with Id: ${blogId} not found`});
    } catch (error) {
        console.log(error.name);
        if(error.name === "CastError")
           return res.status(400).send({message: `Invalid blog id: ${blogId}`})
        res.status(500).send({ message: `Something went wrong ${error.message}`});
    }
    

}

module.exports = { createNewBlog, getAllBlogs, getBlogById }