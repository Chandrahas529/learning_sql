const express = require("express");
const studentController = require("../controllers/studentsController")

const router = express.Router();

router.post("/add",studentController.addStudent);

router.put("/edit/:id",studentController.updateStudent)

router.delete("/delete/:id",studentController.deleteStudent);

module.exports = router;