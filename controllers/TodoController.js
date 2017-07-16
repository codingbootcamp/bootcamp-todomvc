const TodoService = require('../services/TodoService');

module.exports = {
    getAllTodos: function(req, res) {
        TodoService.getAllTodos().then(function(todos) {
            res.json(todos);
        });
    },
    getTodo: function(req, res) {
        TodoService.getTodo(req.params.todoId).then(function(todo) {
            res.json(todo);
        });
    },
    createTodo: function(req, res) {
        TodoService.createTodo(req.body)
        .then(function(todos) {
            res.json(todos);
        });
    }
};
