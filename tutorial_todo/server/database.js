import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql
.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})
.promise();

export async function getTodoByID(id) {
    try {
        const [rows] = await pool.query(
            `SELECT * FROM todos WHERE id=?`,
            [id]
        );
        console.log(rows);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

getTodoByID(1);
