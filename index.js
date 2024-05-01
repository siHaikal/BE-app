const express = require('express');
const cors = require('cors')
const port = 3200

const app = express()
const sequalize = require('./dbConfig')
const loginEndPoint = require('./Route/login')

sequalize.sync().then(() => {
    console.log('data ready')
})
app.use(cors())
app.use(express.json());

app.get('/', ((req, res) => res.send ('hello world')))
app.post('/login', loginEndPoint)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// // CRUD Operations

// // GET all data from the database table
// app.get('/api', (req, res) => {
//     // SELECT * FROM users;
//     sequalize.models.User.findAll().then((users) => {
//         res.status(200).send(users);
//     }).catch((error) => {
//         res.status(400).send({
//             error: 'Error occured while fetching data'
//         });
//     })
// });