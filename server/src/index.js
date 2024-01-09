const express = require('express')
const app = express()
const todoRouter = require('../routes/todo')
const connectDB = require('../db/connect')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
dotenv.config()

//error handlers
require('express-async-errors')
const notFound = require('../errors/notFound')
const errorMiddleware = require('../errors/errorMiddleware')

const port = process.env.PORT || 5000

// Serve static files from the 'dist' directory

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/todos', todoRouter)

//errors
app.use(notFound)
app.use(errorMiddleware)

//connect to db
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening to port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
