const express = require("express");
const {  getUsers, getUserById, searchUsers } = require("../controllers/users.controllers")

const router = express.Router();

router.get("/",getUsers);
router.get("/search",searchUsers);
router.get("/:uuid",getUserById);

module.exports = router;