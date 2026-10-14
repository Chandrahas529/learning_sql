const express = require("express");
const app = express();
const db = require("./Utils/db-connection");
const studentRoutes = require("./routes/studentsRoutes");
const userRoutes = require("./routes/usersRoutes");
const busRoutes = require("./routes/busesRoutes")
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello world");
})

// app.use("/students",studentRoutes);

app.use("/users",userRoutes);

app.use("/buses",busRoutes);

app.listen(3000,()=>{
    console.log("Server is running.")
})