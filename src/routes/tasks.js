const express = require('express');
const router = express.Router();
const db = require('../models/task');

router.post('/create', (req, res) => {
    const { user_id, title, description } = req.body;
    db.query('INSERT INTO Task (user_id, title, description) VALUES (?, ?, ?)', [user_id, title, description], function(err) {
        if (err) {
            return res.status(500).send("Error creating task.");
        }
        res.status(200).send("Task created successfully.");
    });
});

router.get('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    db.query('SELECT * FROM Task WHERE user_id = ?', [userId], (err, rows) => {
        if (err) {
            return res.status(500).send("Error retrieving tasks.");
        }
        res.status(200).json(rows);
    });
});

module.exports = router;

