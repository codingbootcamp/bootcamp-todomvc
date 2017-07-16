const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();
const mongodbURI = 'mongodb://localhost/bootcamptodomvc';

app.use(bodyParser.urlencoded({
    extended: true
}));

// load model schema
require('./models/todo');
const TodoController = require('./controllers/TodoController');

mongoose.Promise = global.Promise;
mongoose.connect(mongodbURI, {
    useMongoClient: true,
});

app.route('/todos')
    .get(function(req, res) {
        return TodoController.getAllTodos(req, res);
    })
    .post(function(req, res) {
        console.log(req);
        return TodoController.createTodo(req, res);
    });

app.listen(PORT);
console.log(`Server started at port: ${PORT}`);
