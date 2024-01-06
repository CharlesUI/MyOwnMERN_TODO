const ToDoModel = require("../models/ToDoModel")

module.exports = async (req, res, next) => {
    const todos = await ToDoModel.find({})
    res.status(200).json({todos})
}