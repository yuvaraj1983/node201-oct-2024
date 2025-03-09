const { userSearchSchema } = require("../validations/users.validation");

const queryValidator =(schema) => (req, res, next) => {
    console.log("search middleware");
   
    const { error } = schema.validate(req.query);

    if(error) 
        return res.status(400).send({message: error.details[0].message})

    next();
}
module.exports = queryValidator;