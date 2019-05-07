const express = require('express');
const router = express.Router();

//import database
const Users = require('../data/models/userModel')

//import and set middleware
const permission = require('../auth/require_permission');

//set error 
const sendError = (msg, res) => {
  res.status(500).json({ error: `${msg}`});
};

//CRUD statements
//get request
router.get('/users', permission, (req, res) => {
  Users.get()
  .then(users => {
    res.status(200).json(users);
  })
  .catch( err => {
    return  sendError( err, res );
  })
})

module.exports = router;