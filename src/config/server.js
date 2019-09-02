const port = 3003

const express = require('express')
const bodyPaser = require('body-parser')
const server = express()
const cors = require('cors')

server.use(bodyPaser.urlencoded({ extended: true }))
server.use(bodyPaser.json())
server.use(cors())

server.listen(port, function() {
    console.log(`backend is running on the port ${port}`)
})

module.exports = server;

// const express = require('express');
// const routes = require('./routes');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const server = express();

// mongoose.connect('mongodb+srv://guilherme:123@cluster0-qgqwn.mongodb.net/tindev?retryWrites=true&w=majority', {
//     useNewUrlParser: true
// });

// server.use(cors());
// server.use(express.json());
// server.use(routes);

// server.listen(3333);