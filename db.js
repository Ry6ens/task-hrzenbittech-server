const mysql = require("mysql");

const db = mysql.createConnection({
  host: "eu-cdbr-west-03.cleardb.net",
  user: "bceb8c703954ae",
  password: "b1e290b6",
  database: "heroku_bcf588308abb006",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected -> ");
});

module.exports = { db };
