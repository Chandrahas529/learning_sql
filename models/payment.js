const {Sequelize , DataTypes} = require("sequelize");
const sequelize = require("../Utils/db-connection");

const Payment = sequelize.define("buses",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    amountPaid:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    PaymentStatus:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Payment;