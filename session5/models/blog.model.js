const mongoose = require("mongoose");

const blogSChema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        content: { type: String, default: "" },
        author:{ type: [String], default: [] },
        publishedAt: { type: Date, default: null},
    },
    {
        timestamps: true, versionKey: false
    }
);

const Blog = mongoose.model("Blog", blogSChema);

module.exports = Blog;