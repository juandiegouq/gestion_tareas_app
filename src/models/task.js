const db = require('./db');

const createTaskTable = `
    CREATE TABLE IF NOT EXISTS Task (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        status VARCHAR(255) NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES User(id)
    )
`;

db.query(createTaskTable, (err, results, fields) => {
    if (err) {
        console.error('Error creating Task table:', err);
    } else {
        console.log('Task table created or already exists.');
    }
});

module.exports = db;

