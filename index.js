const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000
const app = express()

const loginEndPoint = require('./Route/login')
const registerEndPoint = require('./Route/register')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const sequelize = require('./dbConfig')
sequelize.sync().then(() => {
    console.log('data ready')
})

app.use('/login', loginEndPoint)
app.use('/register', registerEndPoint)

app.listen(port, () => {
    console.log(`sedang berjalan di port ${port}`)
})