import mysql from 'mysql2/promise';

let db;

try {
  db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Joshyjosh23!',
    database: 'login_reg_db'
  });
  console.log("Connected to School DB");
} catch (err) {
  console.error("Error on DB connect:", err);
}

export default db;