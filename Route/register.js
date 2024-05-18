const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const RegisterModels = require('../Models/register')

router.post('/', async(req, res) => {
    const { userName, email, password } = req.body

    try {
        const bcryptPass = await bcrypt.hash(password, 10)
        const user = await RegisterModels.create({
            userName, password: bcryptPass, email
        })

        res.status(200).json({
            metadata: 'berhasil register',
            data: user
        })

    } catch(e) {
        res.status(400).json({ message: e.message })
    }
})

module.exports = router