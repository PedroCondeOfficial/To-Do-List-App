var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

router.get('/', function(req, res, next){
	Todo.find(function(err, out){
		if (err) return next(err);
		res.json(out);
	});
});

router.post('/', function(req, res, next){
	Todo.create(req.body, function(err, out){
		if (err) return next(err);
		res.json(out);
	});
});

router.put('/:id', function(req, res, next){
	Todo.findByIdAndUpdate(req.params.id, req.body, function(err, out){
		if (err) return next(err);
		res.json(out);
	});
});

router.delete('/:id', function(req, res, next){
	Todo.findByIdAndRemove(req.params.id, req.body, function(err, out){
		if (err) return next(err);
		res.json(out);
	});
});

module.exports = router;
