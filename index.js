const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin1234",
    database: "busbookingsystem"
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return ;
    }
    console.log("Connection has been created.")

    const UsersQuery = `create table Users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255)
    )`
    connection.execute(UsersQuery,(err)=>{
        if(err){
            console.log(err);
            return ;
        }
        console.log("Users Table is created")
    })

    const BusesQuery = `create table Buses(
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber INT,
        totalSeats INT,
        availableSeats INT
    )`;

    connection.execute(BusesQuery,(err)=>{
        if(err){
            console.log(err);
            return ;
        }
        console.log("Buses table is created");
    })

    const BookingQuery = `create table Bookings(
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT
    )`;
    connection.execute(BookingQuery,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Bookings table is created")
    })
    const PaymentQuery = `create table Payments(
        id INT AUTO_INCREMENT PRIMARY KEY,
        amountPaid INT,
        paymentStatus VARCHAR(20)
    )`;
    connection.execute(PaymentQuery,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Payments table is created");
    })
})

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(3000,()=>{
    console.log("Server is running.")
})