import mysql from "mysql2";

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Somesh@123@123",
  database: "user",
});

export default connection;
