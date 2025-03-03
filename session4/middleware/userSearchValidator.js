const { userSearchSchema } = require("../validations/users.validation");

const userSearchValidator = (req, res, next) => {
    console.log("search middleware");
    const { gender, age } = req.query;
    const { error } = userSearchSchema.validate({gender, age});

    if(error) 
        return res.status(400).send({message: error.details[0].message})

    next();
}
module.exports = userSearchValidator;