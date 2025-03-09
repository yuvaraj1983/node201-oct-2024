const mongoose = require("mongoose");
const validator = require("validator");

const authorSchema = new mongoose.Schema({
    fullName: { type: String, required: true, minLength: 3, 
        maxLength: [25, "Name must be less than 25 characters" ]},
    email: { 
        type: String,
        required: true,
        validate : {
            validator: (value) => validator.isEmail(value, { host_blacklist: [
                "example.com",
                "gmail.com",
                "hotmail.com",
                "yahoo.com",
            ] }),
            message: (props) => `${props.value} is not a valid email address!`,
        },

      },
    twitterHandle: { type: String, default: "" },
    image: { 
        type: String,
        default: "https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png",
        validate : {
            validator: (value) => validator.isURL(value, { protocols: ["https"] }),
            message: (props) => `${props.value} is not a valid URL`
        }
     }
},
{ _id: false}
);

const blogSChema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        content: { type: String, default: "" },
        author:{ type: [authorSchema], default: [] },
        publishedAt: { type: Date, default: null},
    },
    {
        timestamps: true, versionKey: false
    }
);

const Blog = mongoose.model("Blog", blogSChema);

module.exports = Blog;