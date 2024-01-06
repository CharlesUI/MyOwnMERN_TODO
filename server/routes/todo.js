const express = require('express')

const router = express.Router()
//CONTROLLERS
const getAllTodos = require('../controllers/getAllTodos')
const createTodo = require('../controllers/createTodo')
const updateTodo = require('../controllers/updateTodo')
const deleteTodo = require('../controllers/deleteTodo')

router.route('/').get(getAllTodos).post(createTodo)
router.route('/:id').patch(updateTodo).delete(deleteTodo)

module.exports = router