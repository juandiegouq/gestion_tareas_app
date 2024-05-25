const db = require('./db');

const createUserTable = `
    CREATE TABLE IF NOT EXISTS User (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    )
`;

db.query(createUserTable, (err, results, fields) => {
    if (err) {
        console.error('Error creating User table:', err);
    } else {
        console.log('User table created or already exists.');
    }
});

module.exports = db;

