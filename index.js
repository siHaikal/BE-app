const express = require('express');
const cors = require('cors')
const port = 3200

const app = express()
const sequalize = require('./dbConfig')

sequalize.sync().then(() => {
    console.log('data ready')
})
app.use(cors())
app.use(express.json());



app.listen(port, () => {
    console.log(`Server is running on ${port}`)
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