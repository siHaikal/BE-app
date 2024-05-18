const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const RegisterModels = require('../Models/register')

router.post('/', async(req, res) => {
    const { userName, email, password } = req.body

    try {
        const bcryptPass = await bcrypt.hash(password, 10)
        const user = RegisterModels.build({
            userName, password: bcryptPass, email
        })
        await user.save()

        res.status(200).json({
            message: "data berhasil ditambahkan",
            data: user
        })

    } catch(e) {
        res.status(400).json({ message: e.message })
    }
})

module.exports = router