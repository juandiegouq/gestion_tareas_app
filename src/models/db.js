const mysql = require('mysql');

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'YOUR_RDS_ENDPOINT',
    user: 'YOUR_DB_USERNAME',
    password: 'YOUR_DB_PASSWORD',
    database: 'YOUR_DB_NAME'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = db;

