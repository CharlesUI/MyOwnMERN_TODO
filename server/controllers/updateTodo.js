const ToDoModel = require("../models/ToDoModel")

module.exports = async (req, res, next) => {
    const { id: todoId } = req.params
    const updatedTodo = await ToDoModel.findOneAndUpdate({_id: todoId}, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({updatedTodo})
}