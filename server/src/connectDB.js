const mysql = require("mysql");
const env = process.env;

const connection = mysql.createConnection({
  host: env.DB_HOST,
  port: 3306,
  user: "santi",
  password: env.DB_PASSWORD,
  database: env.DATABASE,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("database running!!!");
});

module.exports = connection;
