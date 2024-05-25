const mysql = require('mysql');

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'database-1.cdms6oycumna.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '',
    database: 'database-1'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = db;

