const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    is_complete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Todo', TodoSchema);
