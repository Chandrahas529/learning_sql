const {Sequelize , DataTypes} = require("sequelize");
const sequelize = require("../Utils/db-connection");

const User = sequelize.define("students",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
})


module.exports = User;