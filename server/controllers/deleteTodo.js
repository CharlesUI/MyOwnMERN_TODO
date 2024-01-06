const ToDoModel = require('../models/ToDoModel')

module.exports = async (req, res, next) => {
    const { id: todoId } = req.params
    const deletedTodo = await ToDoModel.findOneAndDelete({_id: todoId})
    res.status(200).json({deletedTodo})
}