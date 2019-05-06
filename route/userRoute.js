const express = require('express');
const router = express.Router();

//import database
const db = require('../data/dbConfig');
const Users = require('../data/models/userModel')

//import and set middleware
const permission = require('../auth/require_permission');

//set error msgs
const sendError = (msg, res) => {
  res.status(500).json({ error: `${msg}`});
};

const missingError = res => {
  res.status(404).json({ error: 'This action does not exist'});
};

const newError = (sts, msg, res) => {
  res.status(sts).json({ error: `${msg}` })
}


//CRUD statements
//get request
sever.get('/users', permission, (req, res) => {
  Users.get()
  .then(users => {
    res.status(200).json(users);
  })
  .catch( err => {
    return  sendError( err, res );
  })
})

//register 
server.post('api/register', ( req, res ) => {

})

//login
server.post('/login', (req, res) => {
  
})


module.exports = router;