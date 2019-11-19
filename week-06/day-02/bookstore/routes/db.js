const pMysql = require('promise-mysql');

// let conn;
const conn = async () => pMysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_BOOKSTORE,
});

module.exports = conn;
