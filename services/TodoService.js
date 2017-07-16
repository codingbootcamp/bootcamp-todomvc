const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

module.exports = {
    getAllTodos: function() {
        return Todo.find({})
            .then(function(todos) {
                return todos;
            });
    },
    getTodo: function(todo_id) {
        return Todo.find({_id: todo_id})
            .then(function(todo) {
                return todo;
            });
    },
    createTodo: function(new_todo_from_request) {
        const new_todo = new Todo(new_todo_from_request);
        return new_todo.save()
            .then(function(todo) {
                return todo;
            });
    }
};
