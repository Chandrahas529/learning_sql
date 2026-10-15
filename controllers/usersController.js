const User = require("../models/user");
const db = require("../Utils/db-connection");

const addUsers = async (req,res) => {
     try{
        const {name,email} = req.body;
        const user = await User.create({
            name,
            email,
        })
        console.log("New user registered");
        res.status(201).send("User registered successfully");
    }
    catch(err){
        res.status(500).send(err.message);
    }
    // const insertQuery = "INSERT INTO users(name,email) VALUES(?,?)";
    // db.execute(insertQuery,[name,email],(err)=>{
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }
    //     console.log("New user registered");
    //     res.status(201).send("User registered successfully");
    // })
}

const getUsers = async (req,res) => {
    try{
        const users = await User.findAll();
         console.log("Fetching all users");
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).send(err.message);
    }
    // const getQuery = "Select * from users";
    // db.execute(getQuery,(err,result)=>{
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send(err.message);
    //         db.end();
    //         return ;
    //     }
    //     console.log("Fetching all users");
    //     res.status(200).json(result);
    // })
}

module.exports = {
    addUsers,
    getUsers
}