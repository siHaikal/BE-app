const { DataTypes, Model } = require('sequelize')
const sequelize = require('../dbConfig')

const Login = sequelize.define('login', {
    userName: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
})

module.exports = Login