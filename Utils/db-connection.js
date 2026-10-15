const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("busbookingsystem","root","admin1234",{
    host:"localhost",
    dialect:"mysql"
});

(async()=>{
    try{
        await sequelize.authenticate();
        console.log("Connection to the database has been created.");
    }
    catch(err){
        console.log(err);
    }
})();

module.exports = sequelize;






// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"admin1234",
//     database: "busbookingsystem"
// })

// const users = [
//     ["Rahul Sharma", "rahul@gmail.com"],
//     ["Priya Verma", "priya@gmail.com"],
//     ["Amit Kumar", "amit@gmail.com"],
//     ["Sneha Patel", "sneha@gmail.com"],
//     ["Rohit Singh", "rohit@gmail.com"],
//     ["Anjali Gupta", "anjali@gmail.com"],
//     ["Vikas Yadav", "vikas@gmail.com"],
//     ["Neha Mishra", "neha@gmail.com"],
//     ["Karan Mehta", "karan@gmail.com"],
//     ["Pooja Sahu", "pooja@gmail.com"]
// ];

// const buses = [
//     [101, 40, 40],
//     [102, 50, 45],
//     [103, 35, 30],
//     [104, 45, 40],
//     [105, 36, 20],
//     [106, 34, 20],
//     [107, 55, 50],
//     [108, 42, 35],
//     [109, 48, 40],
//     [110, 30, 25]
// ];

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//         return ;
//     }
//     console.log("Connection has been created.")

//     const insertUserQuery = `INSERT INTO users (name, email)
//         VALUES (?,?)`;

//     users.forEach(user=>{
//         connection.execute(insertUserQuery, [user[0],user[1]], (err, result) => {
//             if (err) {
//                 console.log("Error inserting users:", err.message);
//                 return;
//             }
//             console.log("Sample data added successfully!")
//         })
//     })

//     const insertBusQuery = `INSERT INTO buses (busNumber,totalSeats,availableSeats)
//         VALUES (?,?,?)`;

//     buses.forEach(bus=>{
//         connection.execute(insertBusQuery, [bus[0],bus[1],bus[2]], (err, result) => {
//             if (err) {
//                 console.log("Error inserting buses:", err.message);
//                 return;
//             }
//             console.log("Sample data added successfully!")
//         })
//     })

//     // const UsersQuery = `create table Users(
//     //     id INT AUTO_INCREMENT PRIMARY KEY,
//     //     name VARCHAR(255),
//     //     email VARCHAR(255)
//     // )`
//     // connection.execute(UsersQuery,(err)=>{
//     //     if(err){
//     //         console.log(err);
//     //         return ;
//     //     }
//     //     console.log("Users Table is created")
//     // })

//     // const BusesQuery = `create table Buses(
//     //     id INT AUTO_INCREMENT PRIMARY KEY,
//     //     busNumber INT,
//     //     totalSeats INT,
//     //     availableSeats INT
//     // )`;

//     // connection.execute(BusesQuery,(err)=>{
//     //     if(err){
//     //         console.log(err);
//     //         return ;
//     //     }
//     //     console.log("Buses table is created");
//     // })

//     // const BookingQuery = `create table Bookings(
//     //     id INT AUTO_INCREMENT PRIMARY KEY,
//     //     seatNumber INT
//     // )`;
//     // connection.execute(BookingQuery,(err)=>{
//     //     if(err){
//     //         console.log(err);
//     //         return;
//     //     }
//     //     console.log("Bookings table is created")
//     // })
//     // const PaymentQuery = `create table Payments(
//     //     id INT AUTO_INCREMENT PRIMARY KEY,
//     //     amountPaid INT,
//     //     paymentStatus VARCHAR(20)
//     // )`;
//     // connection.execute(PaymentQuery,(err)=>{
//     //     if(err){
//     //         console.log(err);
//     //         return;
//     //     }
//     //     console.log("Payments table is created");
//     // })
// })

// module.exports = connection;