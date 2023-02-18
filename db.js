const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const { HOST, USER, PASSWORD, DATABASE, CLEARDB_DATABASE_URL } = process.env;

// const db = mysql.createConnection({
//   host: HOST,
//   user: USER,
//   password: PASSWORD,
//   database: DATABASE,
// });

const db = mysql.createConnection(CLEARDB_DATABASE_URL);

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected -> ");
});

module.exports = { db };
