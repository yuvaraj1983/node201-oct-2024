const mongoose = require("mongoose");

const blogSChema = new mongoose.Schema(
    {
        title: String,
        content: String,
        author:[String],
        publishedAt: Date,
    },
    {
        timestamps: true, versionKey: false
    }
);

const Blog = mongoose.model("Blog", blogSChema);

module.exports = Blog;