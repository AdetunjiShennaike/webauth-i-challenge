//import knexfile and knex
const knex = require('knex');
const knexConfig = require('../knexfile');

//define db for export
const db = knex(knexConfig.development) //easier to change from development later

//export 
module.exports = db;