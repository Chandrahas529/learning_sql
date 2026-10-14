const express = require("express");
const userController = require("../controllers/usersController");
const router = express.Router();

router.post("/",userController.addUsers);

router.get("/",userController.getUsers);

module.exports = router;