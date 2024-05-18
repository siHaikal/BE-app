const bcrypt = require('bcrypt')
const loginModel = require('../Models/register')

const passwordCheck = async(userName, password) => {
    const user = await loginModel.findOne({where: { userName: userName }})
    const validatePassword = await bcrypt.compare(password, user.password)
    return {user, validatePassword}
}

module.exports = passwordCheck