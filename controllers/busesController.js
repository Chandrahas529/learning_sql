const db = require("../Utils/db-connection");

const addBus = (req,res) => {
    const {busNumber,totalSeats,availableSeats} = req.body;
    const insertQuery = "INSERT INTO buses(busNumber,totalSeats,availableSeats) VALUES(?,?,?)";
    db.execute(insertQuery,[busNumber,totalSeats,availableSeats],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log("New bus added");
        res.status(201).send(`Bus number ${busNumber} added successfully`);
    })
}

const getAvailableSeats = (req,res) => {
    const seats = req.params.seats;
    const getQuery = "select * from buses where availableSeats > ?";
    db.execute(getQuery,[seats],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return ;
        }
        console.log(`Fetching all buses which have more than ${seats} available seats`);
        res.status(200).json(result);
    })
}

module.exports = {
    addBus,
    getAvailableSeats
}