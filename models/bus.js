const {Sequelize , DataTypes} = require("sequelize");
const sequelize = require("../Utils/db-connection");

const Bus = sequelize.define("buses",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    busNumber:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    availableSeats:{
        type:DataTypes.INTEGER,
    }
})

module.exports = Bus;