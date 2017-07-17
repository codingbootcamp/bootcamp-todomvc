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
    updateTodo: function(todo_id, updated_todo) {
        const filter = {_id: todo_id};
        const update = {
            $set: {
                "title": updated_todo.title,
                "is_complete": updated_todo.is_complete
            }
        };
        const options = {new: true};
        return Todo
                .findOneAndUpdate(filter, update, options)
                .then(function(todo) {
                    return todo;
                });
    },
    deleteTodo: function(todo_id) {
        return Todo.remove({_id: todo_id})
                .then(() => {});
    },
    createTodo: function(new_todo_from_request) {
        const new_todo = new Todo(new_todo_from_request);
        return new_todo.save()
            .then(function(todo) {
                return todo;
            });
    }
};
