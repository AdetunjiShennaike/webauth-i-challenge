//refactor

module.exports = (req, res, next) => {
  if ( req.session && req.session.username) {
    next();
  }
  else {
    res.status(401).json({ message: 'login fam' })
  }
};



// const bcrypt = require('bcryptjs')

// const Users = require('../data/models/userModel');

// function permission(req, res, next) {
//   const { username, password } = req.headers;

//   if( username && password ) {
//     Users
//     .idCheck({ username })
//     .then(user => {
//       if (user && bcrypt.compareSync(password, user.password)) {
//         next();
//       }
//       else {
//         res.status(401).json({ message: 'sorry bro its wrong ' })
//       }
//     })
//     .catch( err => {
//       res.status(500).json( err )
//     })
//   }
//   else {
//     res.status(400).json( 'gimmie some details' )
//   }
// }

// module.exports = permission;