const express = require('express');
const router = express.Router();

//import database
const Users = require('../data/models/userModel')

const server = express();

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
server.get('/users', permission, (req, res) => {
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
  const user = req.body;

  const hash = bcrypt.hashSync(user.password, 10);

  user.password = hash;

  Users
  .add(user)
  .then(saved => {
    res.status(201).json(saved);
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//login
server.post('/login', (req, res) => {
  const { username, password } = req.body;

  Users
  .idCheck({ username })
  .then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      next();
    }
    else {
      res.status(401).json({ message: 'sorry bro its wrong ' })
    }
  })
  .catch( err => {
    res.status(500).json( err )
  })

})


module.exports = router;