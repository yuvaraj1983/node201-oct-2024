const Blog = require("../models/blog.model");


const createNewBlog = async (req, res) => {
    //console.log(req.body);
    try {
        const newBlog = await Blog.create(req.body);
        res.status(201).send(newBlog);
    } catch (error) {
        if(error.name === "ValidationError")
            return res.status(400).send({message: error.message});
        if(error.code === 11000)
            return res.status(409).send({message: "Blog with this title already exists."})
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
        // if(error.name === "CastError")
        //    return res.status(400).send({message: `Invalid blog id: ${blogId}`})
        res.status(500).send({ message: `Something went wrong ${error.message}`});
    }
    

}

const updateBlogById = async (req, res) => {
    const { blogId } = req.params;
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, { new: true,});
        if(!updatedBlog) return res.status(404).send({message: `Blog with id ${blogId} not found`})
        return res.send(updatedBlog);
    } catch (error) {
        res.status(500).send({ message: `Something went wrong ${error.message}`});
    }

}

const deleteBlogById = async (req, res) => {
    const { blogId } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if(!deletedBlog) return res.status(404).send({message: `Blog with id ${blogId} not found`})
    return res.sendStatus(204);
    try {

    } catch (error) {

    }
}

module.exports = { createNewBlog, getAllBlogs, getBlogById, updateBlogById, deleteBlogById }