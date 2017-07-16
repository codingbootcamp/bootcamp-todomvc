const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

module.exports = {
    getAllTodos: function() {
        return Todo.find({})
            .then(function(todos) {
                return todos;
            });
    }
};
