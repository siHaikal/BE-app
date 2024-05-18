const { DataTypes, Model} = require('sequelize')
const sequelize = require('../dbConfig')

const Register = sequelize.define('Register', {
    userName: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
})

module.exports = Register
