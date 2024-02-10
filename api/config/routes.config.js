const router = require('express').Router();
const todosController = require('../controllers/todos.controller');

//router.get('/', (req, res, next) => res.json({ ok: true }));

router.get('/', todosController.getTodos);
router.post('/todos', todosController.createTodo);
router.delete('/todos/:id', todosController.deleteTodo);
router.put('/todos/:id', todosController.editTodo);
router.get('/todos/:id', todosController.getTodoDetail);


module.exports = router;