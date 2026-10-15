const {Sequelize , DataTypes} = require("sequelize");
const sequelize = require("../Utils/db-connection");

const Booking = sequelize.define("buses",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    seatNumber:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
})

module.exports = Booking;