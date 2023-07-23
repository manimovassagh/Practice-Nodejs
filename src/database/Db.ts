//connect to database with mysql2
import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'XXXX',
    password: 'XXXX',
    database: 'test'
}).promise


