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
    updateTodo: function(req, res) {
        const updated_todo = {
            title: req.body.title,
            is_complete: req.body.is_complete || false
        };
        TodoService.updateTodo(req.params.todoId, updated_todo)
            .then(function(todo) {
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
