const mysql2 = require('mysql2');
const Promise = require('bluebird');
require('dotenv').config(); // required if .env is in another dir

const connection = mysql2.createConnection({  
  password: process.env.USER_PASSWORD || '', 
  user: process.env.USER_NAME || 'root',
  database: process.env.USER_DATABASE,
  host: process.env.USER_HOST || 'localhost',
});

module.exports = connection;

// Promises