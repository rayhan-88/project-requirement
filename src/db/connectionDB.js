import mysql from "mysql2/promise";
import 'dotenv/config';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

// Create the database connection pool
const db = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


export default db;
