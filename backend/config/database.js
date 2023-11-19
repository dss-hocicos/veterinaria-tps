import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'veterinaria_sis2',
  port: 3308
});
  
export default db;