//import knex config
const db = require('../dbConfig');

//export the functions
module.exports = {
  get,
  getById,
  insert,
  idCheck

}

//setup functions
function get() {
 return db('users').select('id', 'username');
}

function getById(id) {
  return db('users')
  .where('id', id)
  .first()
}

function insert(user) {
  return db('users')
  .insert(user)
  .then( ids => {
    return getById(ids[0])
  })

}

function idCheck(user) {
  return db('users')
  .where('username', user)
  .first()
}

