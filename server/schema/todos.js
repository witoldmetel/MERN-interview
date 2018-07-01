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
        title: req.body.title,
        completed: false,
        subtasks: []
    });

    newTodo.save()
        .then(todo => res.json(todo))
});

//DELETE endpoint /todos/:id
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

//PUT endpoint /todos/:id
//update todo (completed)
router.put('/:id', (req, res) => {
    todo.findById(req.params.id)
        .then(todo => {
            todo.completed = !todo.completed;
            todo.save()
                .then(todo => res.json(todo))
        }
)});

//Add subtask
// router.post('/subtasks', (req, res) => {
//     const newSubtask = new subtask({
//         title: req.body.title,
//         completed: false
//     });

//     newSubtask.save()
//         .then(subtask => res.json(subtask))
// });

module.exports = router;