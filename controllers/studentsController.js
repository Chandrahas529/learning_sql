const db = require("../Utils/db-connection")
const addStudent = (req,res) => {
    const {name,email} = req.body;
    const insertQuery = "INSERT INTO students (email,name) VALUES (?,?)";

    db.execute(insertQuery,[email,name],(err)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log("Value has been inserted");
        res.status(201).send(`Student with name ${name} has added.`)
    })
}

const updateStudent = (req,res) => {
    const {id} = req.params;
    const {name} = req.body;
    const updateQuery = "UPDATE students set name=? WHERE id=?";
    db.execute(updateQuery,[name,id],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows === 0){
            res.status(404).send("Student not found")
        }
        console.log("User detail updated successfully");
        res.status(200).send(`User name has been updated`)
    })
}

const deleteStudent = (req,res) => {
    const {id} = req.params;
    const updateQuery = "DELETE FROM students WHERE id=?";
    db.execute(updateQuery,[id],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows === 0){
            res.status(404).send("Student not found")
        }
        console.log("User removed successfully");
        res.status(200).send(`User with ${id} deleted`)
    })
}

module.exports = {
    addStudent,
    updateStudent,
    deleteStudent
}
