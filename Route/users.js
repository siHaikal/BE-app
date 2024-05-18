const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    const user = req.session.user

    if(!user) {
        res.redirect('/login')
    }

    res.status(200).json({
        message: 'user'
    })
})

module.exports = route