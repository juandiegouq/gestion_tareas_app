const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');

const app = express();

app.use(bodyParser.json());
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../public/index.html');
});

module.exports = app;

