const Joi = require("joi");

const blogIdSchema = Joi.object({
    blogId: Joi.string()
    .pattern(/^[a-fA-F0-9]{24}$/)
    .required()
})

module.exports = { blogIdSchema };