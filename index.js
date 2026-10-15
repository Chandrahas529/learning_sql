const express = require("express");
const app = express();
const db = require("./Utils/db-connection");
const userRoutes = require("./routes/usersRoutes");
const busRoutes = require("./routes/busesRoutes");
const User = require("./models/user")
const Bus = require("./models/bus")
const Payment = require("./models/payment")
const Booking = require("./models/bookings")
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.use("/users",userRoutes);

app.use("/buses",busRoutes);

db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
        console.log("Server is running...")
    })
}).catch((err)=>{
    console.log(err);
})