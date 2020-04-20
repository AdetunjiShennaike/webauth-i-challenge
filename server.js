//import express and other dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('express');
const session = require('express-session')
require('dotenv').config();

const sessionConfig = {
  name: 'monster', 
  secret: process.env.SECRET, //should should .env
  cookie: {
    httpOnly: true, // true means prevent access from JavaScript code
    maxAge: 1000 * 60 * 2, 
    secure: false, // https only
  },
  resave: false, 
  saveUninitialized: true, // create new sessions automatically, make sure to comply with law
};


//import routes and env items
const userRoute = require('./route/userRoute');
const authRoute = require('./auth/authRoute')

//define server
const server = express();
server.use(session(sessionConfig));
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));

//define middleware


//set route
server.use('/api/users', userRoute);
server.use('/api/auth', authRoute);


//test
server.get('/', (req, res) => {
  const username = req.session.username || 'and who might you be?';
  res.send(`Hello ${username}!`);
});

//export
module.exports = server;