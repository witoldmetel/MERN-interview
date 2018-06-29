const express = require('express');
const router = express.Router();

//Todo Model
const todo = require('../schema/todo');

//GET endpoint /todos
//Get all todos
router.get('/', (req, res) => {
    todo.find()
        .then(todos => res.json(todos))
});

//POST endpoint /todos
//Add todo
router.post('/', (req, res) => {
    const newTodo = new todo({
        title: req.body.title
    });

    newTodo.save()
        .then(todo => res.json(todo))
});

//POST endpoint /todos/:id
//Delete todo
router.delete('/:id', (req, res) => {
    todo.findById(req.params.id)
        .then(todo => todo.remove()
            .then(() => res.json({
                success: true
            })))
            .catch(err => res.status(404).json({
                success: false
            }))
});


module.exports = router;