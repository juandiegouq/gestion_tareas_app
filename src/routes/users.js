const express = require('express');
const router = express.Router();
const db = require('../models/user');

router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    db.query('INSERT INTO User (username, email, password) VALUES (?, ?, ?)', [username, email, password], function(err) {
        if (err) {
            return res.status(500).send("Error registering user.");
        }
        res.status(200).send("User registered successfully.");
    });
});

module.exports = router;
