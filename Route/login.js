const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passwordCheck = require('../utils/passwordCheck')

router.post('/', async (req, res) => {
    const { userName, password } = req.body

    try {
        const check = await passwordCheck(userName, password)
        if(check.validatePassword) {
            res.status(200).json({
                metadata: 'Login Success',
                data: check.user
            })
        } else {
            res.status(400).json({
                metadata: 'Username atau password salah'
            })
        }
    } catch(e) {
        res.status(500).send(e.message)
    }
})

module.exports = router