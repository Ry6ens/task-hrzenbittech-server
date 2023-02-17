const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1qaz2wsx",
  database: "task-hrzenbittech-db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected -> ");
});

module.exports = { db };
