const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000
const app = express()

const loginEndPoint = require('./Route/login')
const registerEndPoint = require('./Route/register')
const userEndPoint = require('./Route/users')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const sequelize = require('./dbConfig')
sequelize.sync().then(() => {
    console.log('data ready')
}) 

app.get('/', (req, res) => {
    res.status(200).json({
        Message: 'ok'
    })
})

app.use('/login', loginEndPoint)
app.use('/register', registerEndPoint)
app.use('/user', userEndPoint)

app.listen(port, () => {
    console.log(`sedang berjalan di port ${port}`)
})