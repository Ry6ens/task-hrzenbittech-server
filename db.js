const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const { CLEARDB_DATABASE_URL } = process.env;

const db = mysql.createConnection(CLEARDB_DATABASE_URL);

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});

module.exports = { db };
