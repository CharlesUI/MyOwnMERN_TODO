const ToDoModel = require('../models/ToDoModel')

module.exports = async (req, res, next) => {
    const todo = await ToDoModel.create(req.body)
    res.status(200).json({todo})
}