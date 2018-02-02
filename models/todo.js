var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
	task: String,
	date: Date
});

module.exports = mongoose.model('Todo', TodoSchema);
