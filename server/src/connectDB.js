const mysql = require("mysql");
const env = process.env;

const connection = mysql.createConnection({
  host: env.DB_HOST,
  port: 3306,
  user: "",
  password: env.DB_PASSWORD,
  database: env.DATABASE,
});

connection.connect((err) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has to many connections");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused");
    }
  }
  console.log("DB running");
});

module.exports = connection;
