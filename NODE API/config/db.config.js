const mysql = require('mysql');

// CREATE mySQL CONNECTION
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'carbn_db'
});

dbConn.connect(function (error) {
    if (error) throw error;
    console.log('Database Connection Successful');
});

module.exports = dbConn;