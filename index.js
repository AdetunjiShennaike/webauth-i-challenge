//import server and env
const server = require('./server');
require('dotenv').config();

//define the port
const PORT = process.env.PORT || 4300

//listen for the server
server.listen(PORT, () => {
  console.log(`\n This is the bginning of something great ${PORT}\n`)
});