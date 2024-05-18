const { DataTypes, Model} = require('sequelize')
const sequelize = require('../dbConfig')
class Register extends Model{}

Register.init(
    {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        }
    },
    {
        sequelize,
        modelName : 'Register'
    }
)

module.exports = Register
