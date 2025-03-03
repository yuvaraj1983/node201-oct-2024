const express = require("express");
const {  getUsers, getUserById, searchUsers } = require("../controllers/users.controllers")
//const verifyAuth = require("../middleware/verifyAuth");
const router = express.Router();

const userSearchValidator = require("../middleware/userSearchValidator");
const queryValidator = require("../middleware/queryValidator");
const { userSearchSchema } = require("../validations/users.validation");

//router.use(verifyAuth);
router.get("/", getUsers);
//router.get("/search", userSearchValidator, searchUsers);
router.get("/search",queryValidator(userSearchSchema), searchUsers)
router.get("/:uuid",getUserById);

module.exports = router;