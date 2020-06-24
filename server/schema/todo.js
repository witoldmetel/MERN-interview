const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Mongoose Schema
const TodoSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		required: true,
	},
	subtasks: {
		type: Array,
	},
});

module.exports = Todo = mongoose.model('todo', TodoSchema);
