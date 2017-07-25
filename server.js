const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();
let mongodbURI = 'mongodb://localhost/bootcamptodomvc';

const env = process.env.NODE_ENV || 'development';
if (env === 'prod') {
    mongodbURI = 'mongodb://root:bootcamprohan@ds121483.mlab.com:21483/bootcamptodoapp';
}

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(cors());
// load model schema
require('./models/todo');
const TodoController = require('./controllers/TodoController');

mongoose.Promise = global.Promise;
mongoose.connect(mongodbURI, {
    useMongoClient: true,
});

app.route('/')
    .get(function(req, res) {
        return res.json({
            message: 'Welcome to todomvc api.'
        })
    });

app.route('/todos')
    .get(function(req, res) {
        return TodoController.getAllTodos(req, res);
    })
    .post(function(req, res) {
        return TodoController.createTodo(req, res);
    });

app.route('/todos/:todoId')
    .get(function(req, res) {
        return TodoController.getTodo(req, res);
    })
    .patch(function(req, res) {
        return TodoController.updateTodo(req, res);
    })
    .delete(function(req, res) {
        return TodoController.deleteTodo(req, res);
    });

app.listen(PORT);
console.log(`Server started at port: ${PORT}`);
