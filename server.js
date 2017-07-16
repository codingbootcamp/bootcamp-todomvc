const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();
const mongodbURI = 'mongodb://localhost/oversight';

app.use(bodyParser.json());

// load model schema
require('./models/todo');
const TodoController = require('./controllers/TodoController');

mongoose.Promise = global.Promise;
mongoose.connect(mongodbURI, {
    useMongoClient: true,
});

app.route('/')
    .get(function(req, res) {
        return TodoController.getAllTodos(req, res);
    });

app.listen(PORT);
console.log(`Server started at port: ${PORT}`);
