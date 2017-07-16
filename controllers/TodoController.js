const TodoService = require('../services/TodoService');

module.exports = {
    getAllTodos: function(req, res) {
        TodoService.getAllTodos().then(function(todos) {
            res.json(todos);
        });
    },
    createTodo: function(req, res) {
        TodoService.createTodo(req.body)
        .then(function(todos) {
            res.json(todos);
        });
    }
};
