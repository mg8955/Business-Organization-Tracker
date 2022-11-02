const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Groot',
      database: 'business_db'
    },
    console.log(`Connected to business db.`)
  );

module.exports = db;