const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const { CLEARDB_DATABASE_URL } = process.env;

// const db = mysql.createConnection(CLEARDB_DATABASE_URL);
// const db = mysql.createPool(CLEARDB_DATABASE_URL);

const db = mysql.createPool({
  connectionLimit: 10,
  host: "b1e290b6@eu-cdbr-west-03.cleardb.net",
  user: "bceb8c703954ae",
  password: "b1e290b6",
  database: "heroku_bcf588308abb006",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});

module.exports = { db };
