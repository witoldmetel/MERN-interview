const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Mongoose Schema
const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = Todo = mongoose.model('todo', TodoSchema);