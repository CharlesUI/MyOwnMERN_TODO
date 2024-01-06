const mongoose = require('mongoose')

const ToDoSchema = mongoose.Schema({
    text: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const ToDoModel = mongoose.model('Todo', ToDoSchema)

module.exports = ToDoModel