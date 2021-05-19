var mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'most'
});

connection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('WMM is connected to the server!');
});

module.exports = connection;