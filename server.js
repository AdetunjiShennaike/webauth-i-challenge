//import express and other dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('express');
const bcrypt = require('bcryptjs');
require('dotenv').config();


//import routes and env items
const userRoute = require('./route/userRoute');

//define server
const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));

//define middleware


//set route
server.use('/api/', userRoute);


//export
module.exports = server;