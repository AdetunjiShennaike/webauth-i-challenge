const router = require('express').Router();
const bcrypt = require('bcryptjs')

//import database
const Users = require('../data/models/userModel')

//set error msgs
const sendError = (msg, res) => {
  res.status(500).json({ error: `${msg}`});
};

//CRUD statements
//register 
server.post('/register', ( req, res ) => {
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
      res.status(200).json( 'welcome' );
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